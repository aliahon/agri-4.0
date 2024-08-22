import { WelcomeEmail } from "@/emails/Welcome";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, email } = await req.json();

  try {
    const data = await resend.emails.send({
      // TODO: add your email address here
      from: "agri4.0 <onboarding@resend.dev>",
      to: "nohaila09el@gmail.com",
      subject: "Hello world",
      react: WelcomeEmail({ firstName }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
