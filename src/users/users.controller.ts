import { Body, Controller, Post } from '@nestjs/common';
import { string } from 'joi';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('user')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/signup')
  async signUp(@Body() data: CreateUserDto): Promise<any> {
    let isExist = await this.userService.findByFields({
      where: { email: data.email },
    });
    if (isExist) {
      return Object.assign({
        result: false,
        msg: '이미 존재하는 이메일입니다.',
      });
    }
    try {
      await this.userService.saveUser(data);
      return Object.assign({
        result: true,
        msg: '회원가입에 성공하였습니다.',
      });
    } catch (e) {
      return Object.assign({
        result: false,
        msg: '서버내부에러',
      });
    }
  }
}
