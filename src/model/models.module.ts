import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './services/users.service';

@Module({
    imports: [

        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'projectdb',
            synchronize: true,
            entities: [__dirname + '/**/*.entity{.ts,.js}'],

        }),
        TypeOrmModule.forFeature([User])
    ],
    providers: [UsersService],
    exports: [UsersService]
})
export class ModelsModule { }
