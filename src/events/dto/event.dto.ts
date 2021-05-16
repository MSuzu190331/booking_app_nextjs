import { IsNotEmpty } from "class-validator";

export class EventDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  hall: string;

  @IsNotEmpty()
  eventStartDate: Date;

  @IsNotEmpty()
  eventEndDate: Date;

  @IsNotEmpty()
  organizer: string;

  @IsNotEmpty()
  capacity: number;

}