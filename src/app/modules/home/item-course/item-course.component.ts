import {Component, OnInit, SimpleChanges, OnChanges, Input} from '@angular/core';
import {HomeService} from "../home.service";
import {utilsCommonService} from "../../../shared/utillsCommon.service";
interface Courses {
  title?: string;
  image?: string;
  author?: string;
  pointEvaluation?: number
  price?: any
  view?: number,
  discount?: number;
  priceDiscount?: any;
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
    private homeService: HomeService) {
  }

  ngOnChanges(changes:SimpleChanges): void {
    this.getAllCourse();
  }
  ngOnInit() {
    this.getAllCourse();
  }
  getAllCourse(): void {
    this.homeService.getDataFakeAPI().subscribe((res) => {
      this.courseData = res.body;
      this.courseData = this.courseData.map(item => {
        return Object.assign({},item, {price: utilsCommonService.formatMoney(item.price, this.lang)},{priceDiscount: utilsCommonService.formatMoney(item.priceDiscount, this.lang)})
      });
    })
  }

}
