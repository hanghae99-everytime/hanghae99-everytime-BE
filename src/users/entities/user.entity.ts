import { Column, Entity } from 'typeorm';
import { Base } from '../../type_modules/entities';

@Entity()
export class User extends Base {
  @Column()
  email: string;

  @Column()
  password: string;
}
