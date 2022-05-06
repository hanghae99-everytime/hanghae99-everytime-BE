import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  // @Post()
  // create(@Body() CreateUserDto: CreateUserDto): Promise<any> {
  //   return this.userService.create(CreateUserDto);
  // }
}
