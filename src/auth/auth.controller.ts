import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from 'src/users/users.service';
import { ApiTags } from '@nestjs/swagger/dist/decorators/api-use-tags.decorator';

export type AuthBody = {
  email: string;
  password: string;
  genre: string;
  role: string;
};
@ApiTags('auth')
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
    const user = await this.authService.login(authBody);

    if (user) {
      return { message: 'Login successful', user };
    } else {
      return { message: 'Invalid email or password' };
    }
  }
}
