import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.entity';
// import { Logs } from '../../entities/log.entity';
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
    return this.usersRepository.save(userTemp);
  }
  //查询一个
  findOne(id: string) {
    return this.usersRepository.findOne({
      where: { id },
      relations: { profile: true },
    });
  }
  findUserOne(id: string) {
    return this.usersRepository.findOne({ where: { id } });
  }
  //查询每条日志下对应的user
  // async findUserLogs(id: string) {
  //   const user = await this.findUserOne(id);
  //   // return this.logsResitory.find({
  //   //   where: {
  //   //     user,
  //   //   },
  //   //   relations: {
  //   //     user: true,
  //   //   },
  //   // });
  // }
  async findUserLogs(id: string) {
    return await this.findUserOne(id);
    // return this.logsResitory.find({
    //   where: {
    //     user,
    //   },
    //   relations: {
    //     user: true,
    //   },
    // });
  }
  //查询log表下的不同状态的result的个数
  // async findLogsResults() {
  //   //select logs.result as result ,count(logs.result) as count from logs where user.id=logs.useId and user.id=2 group by logs.result
  //   return this.logsResitory.query(
  //     'select logs.result as result ,count(logs.result) as count from logs ,user where user.id=logs.userId and user.id=2 group by logs.result',
  //   );
  // }

  //删除
  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
  //修改
  async update(id: string, user: User) {
    return this.usersRepository.update(id, user);
  }
}
