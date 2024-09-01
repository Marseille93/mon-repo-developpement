import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';
import { UsersService } from 'src/users/users.service';

export type AuthBody = {
  email: string;
  password: string;
  genre: string;
  role: string;
};

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly userService: UsersService,
  ) {}
  @Post('register')
  async register(@Body() authBody: AuthBody) {
    return this.authService.register(authBody);
  }
  @Post('login')
  async login(@Body() authBody: AuthBody) {
    // Utiliser le service d'authentification pour vérifier l'utilisateur
    const user = await this.authService.login(authBody);

    // Si l'utilisateur est trouvé, retournez les informations de l'utilisateur
    if (user) {
      return { message: 'Login successful', user };
    } else {
      return { message: 'Invalid email or password' };
    }
  }
  @UseGuards(JwtAuthGuard)
  @Get()
  async authentificateUser(@Request() request) {
    console.log(request.user);
    const userId: number = request.user.userId;
    return await this.userService.getUser(userId);
  }
}
