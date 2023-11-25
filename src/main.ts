import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import "dotenv/config";
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

const port = process.env.PORT
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  await app.listen(port);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('hbs');
  
  Logger.log(`Berhasil running di ${port}`)
}
bootstrap();
