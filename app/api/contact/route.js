// app/api/contact/route.ts
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "yourgmail@gmail.com",
      pass: "your-app-password",
    },
  });

  await transporter.sendMail({
    from: email,
    to: "chandrakant.sinha@cyberwebstack.com",
    subject: `New message from ${name}`,
    text: message,
  });

  return new Response(JSON.stringify({ success: true }), { status: 200 });
}
