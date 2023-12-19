import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Logs {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  path: string;

  @Column()
  method: string;

  @Column()
  data: string;

  @Column()
  result: string;

  @ManyToOne(() => User, (user) => user.logs)
  user: User;
}
