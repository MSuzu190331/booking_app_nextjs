import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Reserve {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  userId: number;

  @Column()
  eventId: number;
  
  @Column()
  date: Date;
}