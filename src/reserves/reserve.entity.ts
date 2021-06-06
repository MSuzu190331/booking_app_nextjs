import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reserve {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false })
  eventId: number;
  
  @Column({ nullable: false })
  date: Date;
}