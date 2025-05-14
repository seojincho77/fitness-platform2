import 'reflect-metadata';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import * as path from 'path';

// 📂 .env.docker 명시적으로 로드
dotenv.config({ path: path.resolve(__dirname, '..', '.env.docker') });

// 🧪 환경변수 확인용 로그
console.log('📦 Loaded ENV Variables from .env.docker:');
console.log(' - DB_HOST:', process.env.DB_HOST);
console.log(' - DB_PORT:', process.env.DB_PORT);
console.log(' - DB_USERNAME:', process.env.DB_USERNAME);
console.log(' - DB_PASSWORD:', process.env.DB_PASSWORD);
console.log(' - DB_DATABASE:', process.env.DB_DATABASE);

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT ?? '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [__dirname + '/src/**/*.entity.{ts,js}'],
  migrations: [__dirname + '/migrations/*.{ts,js}'],
  synchronize: false,
};

export const AppDataSource = new DataSource(dataSourceOptions);
