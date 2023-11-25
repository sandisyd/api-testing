import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// require('dotenv/config').config();
export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: '',
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize: true,
    logging: true,
    dropSchema: false
}