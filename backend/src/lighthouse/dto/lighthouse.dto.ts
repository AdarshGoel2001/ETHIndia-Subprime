import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class LighthouseDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  aadhar: number;

  @IsString()
  @IsNotEmpty()
  pan: string;

  @IsNumber()
  @IsNotEmpty()
  age: number;

  @IsNumber()
  @IsNotEmpty()
  credit: number;

  @IsString()
  @IsNotEmpty()
  address: string;
}
