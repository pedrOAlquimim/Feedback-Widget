import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "996ddfb61c5dc0",
    pass: "494574fec456bd"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({subject, body}: SendMailData) {
    await transport.sendMail({
    from: 'Equipe Feedget <oi@feedback.com>',
    to: 'Pedro Alquimim <pedrohalquimim@gmail.com>',
    subject,
    html: body,
  });  
  };

};