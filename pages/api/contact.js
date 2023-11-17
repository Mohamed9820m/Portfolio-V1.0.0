import nodemailer from 'nodemailer';


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { name, email, message } = req.body;

  console.log('Received contact form submission:', { name, email, message });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: 'New Contact Form Submission',
    html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
    `,
  };

  const confirmationMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Thank you for contacting us!',
    html: `
      <p>Dear ${name},</p>
      <p>Thank you for contacting me ! I have received your message and will get back to you as soon as possible.</p>
      <p>Best regards,</p>
      <p>Mohamed Habib</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Contact form submission email sent successfully');

    await transporter.sendMail(confirmationMailOptions);
    console.log('Confirmation email sent successfully');

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: 'Error sending email' });
  }
}
