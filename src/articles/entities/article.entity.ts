import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Base } from '../../type_modules/entities';

@Entity()
export class Article extends Base {
  @Column()
  userId: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @Column()
  images: string;
}
