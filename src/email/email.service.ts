import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import * as path from 'path';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(to: string, subject: string, templateName: string, context: any) {
    const templatePath = path.join(__dirname, '..', 'templates', `${templateName}.hbs`);
    
    // Enviar correo usando el mailer service
    await this.mailerService.sendMail({
      to, 
      subject, 
      template: templatePath, 
      context, 
    });
  }
}
