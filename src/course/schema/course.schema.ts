/* eslint-disable prettier/prettier */
//create a class for course

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uniqueId } from 'uuid';

@Schema({
  timestamps: true,
})
export class Course {
  @Prop({
    type: String,
    unique: true,
    default: function UUID() {
      return uniqueId();
    },
  })
  id: string;

  @Prop({
    type: String,
    unique: true,
  })
  name: string;

  @Prop({
    type: String,
    unique: true,
  })
  description: string;

  @Prop({
    type: Number,
    unique: false,
  })
  price: number;

  @Prop({
    type: Number,
    unique: false,
  })
  duration: number;

  @Prop()
  status: CourseStatus;
}

export enum CourseStatus {
  STARTED,
  IN_PROGRESS,
  COMPLETED,
}

//create schema based on the class
export const CourseSchema = SchemaFactory.createForClass(Course);
