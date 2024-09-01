import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersEntity } from './entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
  ) {}
  getUsers(): Promise<UsersEntity[]> {
    return this.usersRepository.find({ select: ['id', 'email'] });
  }
  async getUser(id: number): Promise<UsersEntity> {
    const user = await this.usersRepository.findOne({
      where: { id },
      select: ['id', 'email', 'role'],
    });
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
    return user;
  }
}
