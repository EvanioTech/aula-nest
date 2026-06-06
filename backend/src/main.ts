import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initDatabase } from './infra/database/init';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await initDatabase();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
