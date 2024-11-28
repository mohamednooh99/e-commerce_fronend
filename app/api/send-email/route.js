import { EmailTemplate } from '../../_component/email-template'; 
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [body.email],
      subject: 'Hello world',
      react: EmailTemplate({ body }),
    });

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}
