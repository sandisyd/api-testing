import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'dotenv/config'
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilekitaModule } from './filekita/filekita.module';
import { typeOrmConfig } from './config/orm.config';
import { FilekitaController } from './filekita/filekita.controller';
import { FilekitaService } from './filekita/filekita.service';
import { APP_FILTER } from '@nestjs/core';
import { HttpError } from './shared/http-error.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      typeOrmConfig
    ),
    FilekitaModule
  ],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER,
    useClass: HttpError
  }],
})
export class AppModule {}
