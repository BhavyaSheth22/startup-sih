import { IsString, IsDate, IsInt } from 'class-validator';

export class CreateWorkshopDto {
  @IsString()
  public name: string;
  public theme: string;
  public description: string;
  public links: string;
  public contact: string;
  public organiser: string;

  @IsDate()
  public date: Date;

  @IsInt()
  public fees: Number;
}
