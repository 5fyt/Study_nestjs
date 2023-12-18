import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
@Controller('range')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get(':id')
  finds(@Param() params: any): any {
    const id = params.id;
    if (id === '5') {
      return this.userService.getRangeArr(id);
    }
  }
  @Get('/list')
  findsAll() {
    return this.userService.findAll();
  }
}
