import { Req, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Post()
  create(@Req() req: any) {
    return this.userService.create(req.body);
  }
}
