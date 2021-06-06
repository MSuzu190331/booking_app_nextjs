import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity()
@Unique(['email', 'accountName', 'phoneNumber'])
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  accountName: string;

  @Column({ nullable: false })
  email: string;
  
  @Column({ nullable: false })
  phoneNumber: number;

  @Column({ nullable: false })
  password: string;

}