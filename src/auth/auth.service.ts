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

    // Vérification si l'utilisateur existe déjà
    const existingUser = await this.usersRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new ConflictException('User already exists');
    }

    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    // Création d'une nouvelle entité utilisateur
    const newUser = this.usersRepository.create({
      email,
      password: hashedPassword,
      genre,
      role,
    });

    // Enregistrement de l'utilisateur dans la base de données
    return await this.usersRepository.save(newUser);
  }

  async login(authBody: AuthBody) {
    // Extraction de l'email depuis authBody
    const { email, password } = authBody;

    // Vérification de l'utilisateur par email
    const verifUser = await this.usersRepository.findOne({
      where: { email },
    });
    // Vérification du mot de passe
    const isPasswordValid = await bcrypt.compare(password, verifUser.password);

    // Si le mot de passe est incorrect, on lance une exception
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }
    // Construction du payload JWT
    const payload = {
      sub: verifUser.id,
      email: verifUser.email,
      role: verifUser.role,
    };

    // Génération du token JWT
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
