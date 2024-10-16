import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar' })
  username!: string;

  @Column({ type: 'varchar' })
  password_hash!: string;

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;
}
