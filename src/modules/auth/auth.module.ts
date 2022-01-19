import { AuthController } from './auth.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { ModelsModule } from 'src/model/models.module';

@Module({
    imports: [
        ModelsModule
    ],
    controllers: [AuthController],
    providers: [],
})
export class AuthModule { }
