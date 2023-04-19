import {Component, OnInit} from '@angular/core';
import {HomeService} from "../home.service";

@Component({
  selector: 'app-item-course',
  templateUrl: './item-course.component.html',
  styleUrls: ['./item-course.component.scss']
})
export class ItemCourseComponent implements OnInit {
  courses: any

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    console.log('courses')
    this.getAllCourse();

  }

  getAllCourse(): void {
    this.homeService.getCourses().subscribe((res) => {
      console.log(res)
      this.courses = res.body.courses
    })
  }
  courseDetail(course: any): void {
    console.log(course)
  }

}
