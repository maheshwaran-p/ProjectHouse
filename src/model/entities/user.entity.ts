import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity('user')

export class User {
    @PrimaryGeneratedColumn()
    id: number;
    @Column(

    )
    username: string;
    @Column({
        name: 'password_hash'
    })

    passwordHash: string;


}

