import { Module } from '@nestjs/common';
import { CourseController } from './course.controller';
import { CourseService } from './course.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './schema/course.schema';

@Module({
  controllers: [CourseController],
  providers: [CourseService],
  imports: [
    MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }]),
  ],
})
export class CourseModule {}
