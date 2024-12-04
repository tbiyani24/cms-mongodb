/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Course } from './schema/course.schema';

//services are used to interact with the dabases

@Injectable()
export class CourseService {
  //inject the database models
  constructor(
    @InjectModel(Course.name)
    private courseModel: mongoose.Model<Course>,
  ) {}

  //add new course
  async addCourse(newCourse: Course): Promise<Course> {
    const course = await this.courseModel.create(newCourse);
    return course;
  }

  //get all course
  async getAllCourses(): Promise<Course[]> {
    const courses = await this.courseModel.find();
    return courses;
  }

  //get a course by id
  async getCourseById(id: string): Promise<Course> {
    const course = await this.courseModel.findById(id);
    return course;
  }

  //update course status
  async updateCourseStatus(
    id: string,
    updatedCousrse: Course,
  ): Promise<Course> {
    const course = await this.courseModel.findByIdAndUpdate(
      'id',
      updatedCousrse,
    );
    return course;
  }

  //delete the course
  async deleteCourseById(id: string): Promise<Course> {
    const course = await this.courseModel.findByIdAndDelete(id);
    return course;
  }
}
