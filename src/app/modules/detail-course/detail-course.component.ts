import {Component, OnInit} from '@angular/core';
import {HomeService} from '../home/home.service';
import {Types} from 'mongoose'
import {AuthService} from 'src/app/core/auth/auth.service';
import {BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Component({
    selector: 'app-detail-course',
    templateUrl: './detail-course.component.html',
    styleUrls: ['./detail-course.component.scss']
})
export class DetailCourseComponent implements OnInit {
    panelOpenState = false;
    courseId!: Types.ObjectId | any
    detailCourse: any
    course: any

    constructor(private homeService: HomeService, private authService: AuthService, private router: Router) {
        this.courseId = localStorage.getItem('courseId');

    }

    ngOnInit() {
        this.getDetailCourse()
    }

    getDetailCourse() {
        this.homeService.getDetailCourse(this.courseId).subscribe(res => {
            this.detailCourse = res.body.data
            this.detailCourse?.course.forEach((course: any) => {
                this.course = course
            })
        })
    }

    registerCourse() {
        this.authService.signedin$.subscribe(signIn => {
            if (signIn) {
                this.router.navigateByUrl('/learn')
            } else {
                this.router.navigateByUrl('/sign-in');

            }
        })
    }
}

