import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ length: 48, nullable: false })
  title: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  hall: string;

  @Column({ nullable: false })
  eventStartDate: Date;

  @Column({ nullable: false })
  eventEndDate: Date;

  @Column({ nullable: false })
  organizer: string;

  @Column({ nullable: false })
  capacity: number;

  constructor(title: string, description: string, hall: string, eventStartDate: Date, eventEndDate: Date, organizer: string, capacity: number) {
    this.title = title;
    this.description = description;
  }
}