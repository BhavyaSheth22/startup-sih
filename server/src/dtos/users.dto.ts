import { IsDefined, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  @IsDefined()
  public email: string;

  @IsString()
  @IsDefined()
  public password: string;
}
