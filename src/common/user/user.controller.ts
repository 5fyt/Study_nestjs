import { Body, Controller, Get, Param, Post, Logger } from '@nestjs/common';
import { UsersService } from './user.service';
import { LogsService } from '../logs/logs.service';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UsersService,
    private readonly logsService: LogsService,
    private readonly logger: Logger,
  ) {
    this.logger.log('log init');
  }
  @Get()
  findAll() {
    this.logger.log('请求成功');
    this.logger.error('请求成功');
    return this.userService.findAll();
  }
  @Post()
  create(@Body() body: any) {
    return this.userService.create(body);
  }
  @Get(':id')
  findOne(@Param() params: any) {
    // console.log(params.id);
    try {
      return this.userService.findOne(params.id);
    } catch {
      throw this.logger.error('user路径错误');
    }
  }
  @Get(':id/log')
  findOneLog(@Param() params: any) {
    this.logger.log('find log');
    const user = this.userService.findUserLogs(params.id);
    return this.logsService.findLogs(user);
  }
}
