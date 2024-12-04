/* eslint-disable prettier/prettier */

import { IsNumber, IsString } from '@nestjs/class-validator';

export class CreateCourseDto {
  @IsString()
  name: string;

  @IsString()
  descrption: string;

  @IsNumber()
  price: number;

  @IsNumber()
  duration: number;
}
