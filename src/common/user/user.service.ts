import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }
  //新增
  async create(user: User) {
    const userTemp = await this.usersRepository.create(user);
    this.usersRepository.save(userTemp);
    return {
      code: 200,
      data: userTemp,
      message: 'success',
    };
  }
  //查询一个
  findOne(id: string) {
    return this.usersRepository.findOne({ where: { id } });
  }
  //删除
  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  //修改
  async update(id: string, user: User) {
    return this.usersRepository.update(id, user);
  }
}
