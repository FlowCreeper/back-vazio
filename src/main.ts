import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'https://flowcreeper-40741bd8d1ef.herokuapp.com', // Specify allowed origin
    methods: ['GET', 'POST', 'OPTIONS'], // Specify allowed methods
    allowedHeaders: ['Content-Type'], // Specify allowed headers
  });
  await app.listen(process.env.PORT || 5000);
}
bootstrap();
