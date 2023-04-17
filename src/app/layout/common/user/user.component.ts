import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../../core/auth/auth.service";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit{
  signind$!: BehaviorSubject<any>;

  constructor(private router: Router, private auth: AuthService) {
  }
  ngOnInit() {
    this.signind$ = this.auth.signedin$
  }
  signIn() {
    this.router.navigate(['/sign-in'])
  }
  signOut() {
    this.router.navigate(['/sign-out'])
  }
}
