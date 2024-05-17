import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";







export async function POST(req: Request)
{
    try {
        const json = await req.json();
        const { name, email, message, subject } = json;


        const transporter = nodemailer.createTransport({
            host: "mail.privateemail.com",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            },
        });
        const mailOptions = {
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: subject,
            html: ` <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <table style="width: 100%; max-width: 600px; margin: auto; border-collapse: collapse;">
                        <tr>
                            <td style="background-color: #f7f7f7; padding: 20px; text-align: center; border-bottom: 1px solid #ddd;">
                                <h2 style="margin: 0; color: #4CAF50;">New Contact Form Submission</h2>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 20px;">
                                <p style="margin: 0 0 10px 0;">Dear Team,</p>
                                <p style="margin: 0 0 10px 0;">You have received a new message from your website contact form. Here are the details:</p>
                                <table style="width: 100%; margin-bottom: 20px; border-collapse: collapse;">
                                    <tr>
                                        <td style="padding: 5px; border: 1px solid #ddd;"><strong>Name:</strong></td>
                                        <td style="padding: 5px; border: 1px solid #ddd;">${name}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px; border: 1px solid #ddd;"><strong>Email:</strong></td>
                                        <td style="padding: 5px; border: 1px solid #ddd;">${email}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px; border: 1px solid #ddd;"><strong>Subject:</strong></td>
                                        <td style="padding: 5px; border: 1px solid #ddd;">${subject}</td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 5px; border: 1px solid #ddd;"><strong>Message:</strong></td>
                                        <td style="padding: 5px; border: 1px solid #ddd;">${message}</td>
                                    </tr>
                                </table>
                                <p style="margin: 0;">Best regards,</p>
                                <p style="margin: 0;">Your Website Team</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="background-color: #f7f7f7; padding: 10px; text-align: center; border-top: 1px solid #ddd;">
                                <p style="margin: 0; font-size: 12px; color: #999;">This email was generated automatically from your website's contact form.</p>
                            </td>
                        </tr>
                    </table>
                </div>`,
        };

        await transporter.sendMail(mailOptions);

        return new NextResponse(
            JSON.stringify({
                success: true
            }),
            {
                status: 200,
                headers: {
                    "Content-Type": "application/json",
                },

            }
        );

    } catch (error) {
        console.log(error);
        return new NextResponse(
            JSON.stringify({
                success: false,
                message: "Server Error"
            }),
            {
                status: 500,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );

    }
}
