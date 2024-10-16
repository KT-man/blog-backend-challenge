import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  user_id!: number;

  @Column()
  title!: string;

  @Column('text')
  body!: string;

  @Column()
  status: string = '';

  @Column({ type: 'timestamp' })
  created_at!: Date;
}
