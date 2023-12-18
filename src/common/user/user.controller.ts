import { Controller, Get } from '@nestjs/common';
import { UsersService } from './user.service';

@Controller('list')
export class UserController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
}
