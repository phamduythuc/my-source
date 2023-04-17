import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";
import {BehaviorSubject} from "rxjs";
import { Router } from '@angular/router';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
    signin$: BehaviorSubject<boolean>;
    columnDetailPage =[
      {
        title: "TÀI NGUYÊN",
        data: [
          "phone: +8412345678",
          "address: Số 26 Dương Đình Nghệ, Phường Yên Hòa, Quận Cầu Giấy, TP. Hà Nội",
          "email: FullCourse@gmail.com",
        ]
      },
      {
        title: "SẢN PHẨM"
      },
      {
        title: "VỀ CHÚNG TÔI",
        data: [
          "Giới thiệu",
          "Liên hệ",
          "Điều khoản",
          "Bảo mật",
          "Cơ hội việc làm"
        ]
      },
      // {
      //   title: "SẢN PHẨM"
      // },
      {
        title: "ỦNG HỘ CHÚNG TÔI",
        // data: [
        //   'facebook', 'github', 'youtube'
        // ]
      }
      ]
    constructor(private auth: AuthService,private router: Router) {
        this.signin$ = this.auth.signedin$

    }

    ngOnInit() {
        this.auth.checkAuth().subscribe(() =>{})
    }
    logout(): void {
            this.auth.signout().subscribe();
                // this.router.navigateByUrl('/')
        }
}
