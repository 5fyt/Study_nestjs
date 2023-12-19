import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from '../user/user.service';
import { UserController } from './user.controller';
import { User } from '../../entities/user.entity';
import { LogsModule } from '../logs/logs.module';
// import { Logs } from '../../entities/log.entity';
@Module({
  imports: [TypeOrmModule.forFeature([User]), LogsModule],
  providers: [UsersService],
  controllers: [UserController],
})
export class UserModule {}
