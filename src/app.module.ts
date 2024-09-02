import { Module } from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './auth/roles.guard';
import * as config from '../config.json';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [() => config], // Charge les configurations depuis config.json
      isGlobal: true, // Rendre les variables accessibles globalement
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.DATABASE_HOST, // Accès direct à config.json
      port: parseInt(config.DATABASE_PORT),
      username: config.DATABASE_USER,
      password: config.DATABASE_PASSWORD,
      database: config.DATABASE_DBNAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    BooksModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
})
export class AppModule {}
