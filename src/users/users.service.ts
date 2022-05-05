import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [];

  // async signUp(CreateUserDto): Promise<any> {
  //   const isExist = await this.userRepository.findOne({
  //     email: CreateUserDto.email,
  //   });
  // }
}
