import nodemailer from 'nodemailer';
import config from '../config/config.js';
import userConfirmationTemplate from '../templates/userConfirmationTemplate.js';
import adminNotificationTemplate from '../templates/adminNotificationTemplate.js';


export const sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.emailUser,
        pass: config.emailPass,
      },
    });

    const userMailOptions = {
      from: config.emailUser,
      to: email,
      subject: `Confirmation: ${subject}`,
      html: userConfirmationTemplate(name, subject),
    };

    const adminMailOptions = {
      from: config.emailUser,
      to: config.emailUser,
      subject: `New Contact Form Submission: ${subject}`,
      html: adminNotificationTemplate(name, email, subject, message),
    };

    await transporter.sendMail(userMailOptions);
    await transporter.sendMail(adminMailOptions);

    res.status(200).json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
};
