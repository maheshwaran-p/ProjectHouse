

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>
    ) { }

    creatUser(user: User): Promise<User> {
        return this.userRepository.save(user);

    }

    // viewUser(id: number): Promise<User> {
    //     let user = this.userRepository.findOne({ where: { "id": id } });
    //     return user;
    // }
}
