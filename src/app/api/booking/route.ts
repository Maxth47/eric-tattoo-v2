import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = "erictattoo.fi@gmail.com";

// Rate limiter persisted via globalThis (survives HMR and stays in memory)
const RATE_LIMIT = 3;
const RATE_WINDOW = 12 * 60 * 60 * 1000;

const globalRateMap = (globalThis as Record<string, unknown>)
  .__bookingRateMap as Map<string, number[]> | undefined;
const rateMap: Map<string, number[]> = globalRateMap || new Map();
(globalThis as Record<string, unknown>).__bookingRateMap = rateMap;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateMap.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW,
  );
  if (timestamps.length >= RATE_LIMIT) return true;
  timestamps.push(now);
  rateMap.set(ip, timestamps);
  return false;
}

export async function POST(req: NextRequest) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const formData = await req.formData();

    // Honeypot check — if filled, it's a bot
    const honeypot = formData.get("website") as string;
    if (honeypot) {
      // Pretend success to the bot
      return NextResponse.json({ success: true });
    }

    const firstName = (formData.get("firstName") as string)?.trim();
    const lastName = (formData.get("lastName") as string)?.trim();
    const phone = (formData.get("phone") as string)?.trim();
    const location = (formData.get("location") as string)?.trim();
    const email = (formData.get("email") as string)?.trim();
    const description = (formData.get("description") as string)?.trim();

    // Validation
    const errors: string[] = [];
    if (!firstName || /\d/.test(firstName)) errors.push("First name is required and cannot contain numbers");
    if (!lastName || /\d/.test(lastName)) errors.push("Last name is required and cannot contain numbers");
    if (!phone || !/^[+\d][\d\s\-()]{6,}$/.test(phone))
      errors.push("Valid phone number is required");
    if (!location) errors.push("Location is required");
    if (!email) errors.push("Email is required");
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.push("Invalid email format");
    if (!description) errors.push("Description is required");

    if (errors.length > 0) {
      return NextResponse.json({ error: errors.join(", ") }, { status: 400 });
    }

    // Collect image attachments (max 5)
    const attachments: { filename: string; content: Buffer }[] = [];
    const imageEntries = formData.getAll("images");
    for (const entry of imageEntries) {
      if (attachments.length >= 5) break;
      if (entry instanceof File && entry.size > 0) {
        const buffer = Buffer.from(await entry.arrayBuffer());
        attachments.push({ filename: entry.name, content: buffer });
      }
    }

    const hasImages = attachments.length > 0;

    await resend.emails.send({
      from: "Eric Le Tattoo <onboarding@resend.dev>",
      to: TO_EMAIL,
      subject: `New Booking Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff;">
          <!-- Header -->
          <div style="background-color: #000000; padding: 32px 40px; text-align: center;">
            <h1 style="color: #ffffff; font-size: 20px; font-weight: 500; margin: 0; letter-spacing: 0.5px;">ERIC LE TATTOO</h1>
          </div>

          <!-- Body -->
          <div style="padding: 40px;">
            <h2 style="color: #111; font-size: 22px; font-weight: 600; margin: 0 0 8px;">New Booking Request</h2>
            <p style="color: #888; font-size: 14px; margin: 0 0 32px;">Received on ${new Date().toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })} at ${new Date().toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}</p>

            <!-- Client Info Card -->
            <div style="background-color: #f8f8f8; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
              <h3 style="color: #111; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px; color: #666;">Client Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 14px; width: 100px; vertical-align: top;">Name</td>
                  <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: 500;">${firstName} ${lastName}</td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 14px; vertical-align: top; border-top: 1px solid #eee;">Phone</td>
                  <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: 500; border-top: 1px solid #eee;"><a href="tel:${phone}" style="color: #111; text-decoration: none;">${phone}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 14px; vertical-align: top; border-top: 1px solid #eee;">Email</td>
                  <td style="padding: 10px 0; font-size: 14px; font-weight: 500; border-top: 1px solid #eee;"><a href="mailto:${email}" style="color: #111; text-decoration: underline;">${email}</a></td>
                </tr>
                <tr>
                  <td style="padding: 10px 0; color: #888; font-size: 14px; vertical-align: top; border-top: 1px solid #eee;">Location</td>
                  <td style="padding: 10px 0; color: #111; font-size: 14px; font-weight: 500; border-top: 1px solid #eee;">${location}</td>
                </tr>
              </table>
            </div>

            <!-- Description Card -->
            <div style="background-color: #f8f8f8; border-radius: 12px; padding: 24px; margin-bottom: 24px;">
              <h3 style="color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 12px;">Project Description</h3>
              <p style="color: #333; font-size: 15px; line-height: 1.7; margin: 0;">${description.replace(/\n/g, "<br>")}</p>
            </div>

            ${
              hasImages
                ? `
            <!-- Attachments -->
            <div style="background-color: #f8f8f8; border-radius: 12px; padding: 24px;">
              <h3 style="color: #666; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 4px;">Reference Images</h3>
              <p style="color: #888; font-size: 14px; margin: 0;">${attachments.length} image${attachments.length > 1 ? "s" : ""} attached to this email</p>
            </div>
            `
                : ""
            }

            <!-- Reply CTA -->
            <div style="text-align: center; margin-top: 32px;">
              <a href="mailto:${email}?subject=Re: Tattoo Booking - ${firstName} ${lastName}" style="display: inline-block; background-color: #000; color: #fff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500;">Reply to ${firstName}</a>
            </div>
          </div>

          <!-- Footer -->
          <div style="padding: 24px 40px; border-top: 1px solid #eee; text-align: center;">
            <p style="color: #aaa; font-size: 12px; margin: 0;">This booking was submitted via ericletattoo.com</p>
          </div>
        </div>
      `,
      ...(hasImages ? { attachments } : {}),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Booking email error:", error);
    return NextResponse.json(
      { error: "Failed to send booking request. Please try again." },
      { status: 500 },
    );
  }
}
