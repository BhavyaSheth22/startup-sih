import { IsString } from 'class-validator';

export class CreateSchemeDto {
  @IsString()
  public name: string;
  public ministry: string;
  public description: string;
  public links: string;
}
