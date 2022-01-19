/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, Request } from '@nestjs/common';
import { get } from 'http';
import { User } from 'src/model/entities/user.entity';
import { UsersService } from 'src/model/services/users.service';


@Controller('/users')
export class AuthController {

    constructor(
        private userService: UsersService
    ) { }

    // @Get()
    // viewUser(): any {
    //     return this.userService.viewUser(1);
    // }


    @Post()
    createUser(): any {
        let user = new User();
        user.username = "Maheshwaran";
        user.passwordHash = "password";
        return this.userService.creatUser(user);



    }
}
