import { AuthModule } from './modules/auth/auth.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModelsModule } from './model/models.module';
import { AuthController } from './modules/auth/auth.controller';

@Module({
  imports: [
    AuthModule,

    ModelsModule

  ],
  controllers: [AppController, AuthController],
  providers: [AppService],
})
export class AppModule { }
