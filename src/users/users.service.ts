import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from './repository/UserRepository';
import { FindOneOptions } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserRepository) private userRepository: UserRepository,
  ) {}

  async findByFields(
    options: FindOneOptions<CreateUserDto>,
  ): Promise<CreateUserDto | undefined> {
    return await this.userRepository.findOne(options);
  }

  async saveUser(
    CreateUserDto: CreateUserDto,
  ): Promise<CreateUserDto | undefined> {
    return await this.userRepository.save(CreateUserDto);
  }
}
