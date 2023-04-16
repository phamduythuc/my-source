import {Component, OnInit, DoCheck, SimpleChanges, OnChanges, Input} from '@angular/core';
import {HomeService} from "../home.service";
import {utilsCommonService} from "./../../../shared/utillsCommon.service";
import {TranslocoService} from "@ngneat/transloco";

interface Courses {
  title?: string;
  image?: string;
  author?: string;
  pointEvaluation?: number
  price?: any
  view?: number
}
@Component({
  selector: 'app-item-course',
  templateUrl: './item-course.component.html',
  styleUrls: ['./item-course.component.scss']
})
export class ItemCourseComponent implements OnInit, OnChanges, DoCheck  {
  courses: any
  courseData : Courses[] = [];
  @Input() lang: any;
  constructor(
    private homeService: HomeService,
    private translocoService: TranslocoService ) {
    // this.lang = translocoService.getActiveLang();
    this.changeLang();
    this.getAllCourse();
  }

  ngOnChanges(changes:SimpleChanges): void {
    console.log(changes)
  }
  ngDoCheck() {
  }

  ngOnInit() {
    // this.courseData = [
    //   {
    //     title: "NodeJs",
    //     image: "NodeJs.jpg",
    //     author: "Format",
    //     pointEvaluation: 5.0,
    //     view: 2090,
    //     price: utilsCommonService.formatMoney(2000, this.lang)
    //   },
    //   {
    //     title: "AngularJs",
    //     image: "AngularJs.jpg",
    //     author: "Faker",
    //     pointEvaluation: 3.0,
    //     view: 9900,
    //     price: utilsCommonService.formatMoney(2000, this.lang)
    //   },
    //   {
    //     title: "ReactJs",
    //     image: "ReactJs.jpg",
    //     author: "Acer-HD",
    //     pointEvaluation: 5.0,
    //     view: 90,
    //     price: utilsCommonService.formatMoney(2000, this.lang)
    //   },
    //   {
    //     title: "Java",
    //     image: "Java.jpg",
    //     author: "JavaCore",
    //     pointEvaluation: 5.0,
    //     view: 1999
    //   },
    //   {
    //     title: "JavaScript",
    //     image: "JavaScript.jpg",
    //     author: "JavaScript ES6",
    //     pointEvaluation: 4.5,
    //     view: 2090
    //   },
    //   {
    //     title: "Complete MongoDB Administration Guide",
    //     image: "Python.jpg",
    //     author: "Python dotcom",
    //     pointEvaluation: 2.5,
    //     view: 2090
    //   },
    //   {
    //     title: "Java Design Patterns & SOLID Design Principles",
    //     image: "JavaScript.jpg",
    //     author: "JavaScript ES6",
    //     pointEvaluation: 0.5,
    //     view: 2090
    //   },
    //   {
    //     title: "Design Patterns in TypeScript",
    //     image: "Python.jpg",
    //     author: "Python dotcom"
    //   }
    // ]
    // this.getAllCourse();
    // console.log('courseData', this.courseData)
    // this.getAllCourse();
  }
  changeLang() {
    this.translocoService.langChanges$.subscribe(() =>{
      this.lang = this.translocoService.getActiveLang()
    })
    return this.lang
  }
  getAllCourse(): void {
    this.homeService.getDataFakeAPI().subscribe((res) => {
      this.courseData = res.body;
      console.log('courseData', this.courseData)
      this.courseData = this.courseData.map(item => {
        return Object.assign({},item, {price: utilsCommonService.formatMoney(item.price, this.lang)})
      });
      console.log('price', this.courseData)
    })
  }

}
