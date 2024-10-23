import { Controller, Post, Body, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('send')
  async sendEmail(
    @Body('to') to: string,
    @Body('subject') subject: string,
    @Body('templateName') templateName: string,
    @Body('context') context: any,
  ) {
    return this.emailService.sendEmail(to, subject, templateName, context);
  }

  @Get()
  async saludo(){
    return this.emailService.saludos()
  }
}
