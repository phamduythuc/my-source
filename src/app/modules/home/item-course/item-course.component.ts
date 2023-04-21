import {Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';
import {HomeService} from "../home.service";
import {utilsCommonService} from "../../../shared/utillsCommon.service";
import {Router} from "@angular/router";
interface Courses {
  _id: any
  title?: string;
  image?: string;
  author?: string;
  pointEvaluation?: number
  price?: any
  view?: number,
  discount?: number;
  priceDiscount?: any;
  background: any
}
@Component({
  selector: 'app-item-course',
  templateUrl: './item-course.component.html',
  styleUrls: ['./item-course.component.scss']
})
export class ItemCourseComponent implements OnInit, OnChanges  {
  courses: any
  courseData : Courses[] = [];
  @Input() lang: any;
  constructor(
    private homeService: HomeService, private router: Router) {
  }

  ngOnChanges(changes:SimpleChanges): void {
    // bị gọi 2 lần
    this.getAllCourse();
  }
  ngOnInit() {
    this.getAllCourse();

  }
  getAllCourse(): void {
    this.homeService.getCourses().subscribe((res) => {
      this.courseData = res.body.courses;
      this.courseData = this.courseData.map(item => {
        return Object.assign({},item, {price: utilsCommonService.formatMoney(item.price, this.lang)},{priceDiscount: utilsCommonService.formatMoney(item.priceDiscount, this.lang)})
      });
    })
  }
  courseDetail(course: any): void {

  }
  getDetailCourse(courseId: any) {
    localStorage.setItem('courseId', courseId)
    this.router.navigateByUrl('/detail-course')
    // this.homeService.getDetailCourse(courseId).subscribe(res => {
    //   console.log(res)
    // })
  }

}
