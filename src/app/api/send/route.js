import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
    const result = await req.json()
    console.log(result)
    try {
        const transport = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: process.env.NEXT_PUBLIC_EMAIL,
                pass: process.env.NEXT_PUBLIC_PASS,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const template = {
            from: process.env.NEXT_PUBLIC_EMAIL,
            to: result.email,
            subject: result.subject,
            text: result.message,
            html: `<p>${result.message}</p>`,
        };

        await transport.sendMail(template);

        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ message: "Email not sent", error: error }, { status: 500 });
    }
}
