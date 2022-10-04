import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user.dto';
import { User } from './entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  createUser(user: CreateUserDto) {
    const data = this.userRepository.create(user);
    return this.userRepository.save(data);
  }

  getuser() {
    return this.userRepository.find();
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }

  updateOne(id: number, user: CreateUserDto) {
    return this.userRepository.update(id, user);
  }
}
