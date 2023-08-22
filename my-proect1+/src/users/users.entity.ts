import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    OneToMany,
    ManyToOne,
    } from 'typeorm';
import { NewsEntity } from '../news/news.entity';
import { CommentsEntity } from '../news/comments/comments.entity';
import { Role } from '../auth/role/role.enum';
import { IsEnum, IsOptional } from 'class-validator';

@Entity('users')
export class UsersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    firstName: string;

    @Column('text')
    lastName: string;

    @Column('text')
    email: string;

    @Column('text')
    password: string;

    @Column('text',  { nullable: true })
    avatar: string;

    @Column('text')
    @IsEnum(Role)
    roles: Role;

    @OneToMany(() => NewsEntity, (news) => news.user)
    news: NewsEntity[];
    
    @OneToMany(() => CommentsEntity, (comments) => comments.user)
    comments: CommentsEntity[];
    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
    @UpdateDateColumn({ type: 'timestamp' })
    updatedAt: Date;
}
