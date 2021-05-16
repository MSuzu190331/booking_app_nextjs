import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 48 })
  title: string;

  @Column()
  description: string;

  @Column()
  hall: string;

  @Column()
  eventStartDate: Date;

  @Column()
  eventEndDate: Date;

  @Column()
  organizer: string;

  @Column()
  capacity: number;

  constructor(title: string, description: string, hall: string, eventStartDate: Date, eventEndDate: Date, organizer: string, capacity: number) {
    this.title = title;
    this.description = description;
  }
}