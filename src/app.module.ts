import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailService } from './email/email.service';
import { EmailController } from './email/email.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT, 10),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      },
      defaults: {
        from: '"No Reply" <no-reply@example.com>',
      },
      template: {
        dir: process.cwd() + '/src/templates',
        adapter: new (require('handlebars'))(),
        options: {
          strict: true,
        },
      },
    }),
  ],
  providers: [EmailService],
  controllers: [EmailController],
})
export class AppModule {}
