import {
  ConflictException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthBody } from './auth.controller';
import { UsersEntity } from 'src/users/entities/users.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersEntity)
    private usersRepository: Repository<UsersEntity>,
    private readonly jwtService: JwtService,
  ) {}
  async register(authBody: AuthBody): Promise<UsersEntity> {
    const { email, password, genre, role } = authBody;

    const existingUser = await this.usersRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = this.usersRepository.create({
      email,
      password: hashedPassword,
      genre,
      role,
    });

    return await this.usersRepository.save(newUser);
  }

  async login(authBody: AuthBody) {
    const { email, password } = authBody;

    const verifUser = await this.usersRepository.findOne({
      where: { email },
    });
    const isPasswordValid = await bcrypt.compare(password, verifUser.password);

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload = {
      sub: verifUser.id,
      email: verifUser.email,
      role: verifUser.role,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
