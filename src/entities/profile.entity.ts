import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Profile {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  gender: number;

  @Column()
  photo: string;

  @Column()
  address: string;
  //需要添加上关联关系，不是只写(()=>User)
  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn()
  user: User;
}
