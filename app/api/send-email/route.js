import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    const { name, email, phone, serviceNeeded, issue } =  await request.json();
    console.log({ name, email, phone, serviceNeeded, issue });

    const message = {
        from: process.env.GMAIL_USER, //email address that sends the email containing the information (should create a proxy email just for this)
        to: 'molnarpeti69@gmail.com', //company's email address
        subject: `${name} - ${serviceNeeded}`,
        html: `
        <p>Ügyfél: ${name}</p>
        <p>Telefonszám: ${phone}</p>
        <p>Kért szolgáltatás: ${serviceNeeded}</p>
        <p>Probléma részletesebb leírása:<br/>${issue}</p>
        `,
        headers: {
            "X-Entity-Ref-ID": "newmail"
        }
    }
    
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PWD,
        },
        tls: {
            rejectUnauthorized: false
        }
    })

    try {
        //await transporter.sendMail(message);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error processing request:', error);
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
    }
}
