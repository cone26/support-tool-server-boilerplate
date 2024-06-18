import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Server } from './server';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);

  const server = new Server(app);
  await server.init();
  await server.run();
}
bootstrap();
