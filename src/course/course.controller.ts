/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { CourseService } from './course.service';
import { Course, CourseStatus } from './schema/course.schema';
import { CreateCourseDto } from './dto/course';
import { v4 as unique } from 'uuid';

@Controller('course')
export class CourseController {
  constructor(private courseService: CourseService) {}

  //add new course
  @Post()
  addNewCourse(@Body() newCourse: CreateCourseDto): Promise<Course> {
    const course: Course = {
      id: unique(),
      name: newCourse.name,
      description: newCourse.descrption,
      price: newCourse.price,
      duration: newCourse.duration,
      status: CourseStatus.STARTED,
    };
    const res = this.courseService.addCourse(course);
    return res;
  }
}
