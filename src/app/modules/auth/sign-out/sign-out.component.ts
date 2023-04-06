import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";
import {Subject, timer} from "rxjs";
import {finalize, takeWhile, takeUntil, tap} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.scss']
})
export class SignOutComponent implements OnInit{
  countdown: number = 5;
  countdownMapping: any = {
    '=1'   : '# second',
    'other': '# seconds'
  };
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  constructor(private _authService: AuthService,private router: Router){
  }
  ngOnInit() {
    // Sign out
    this._authService.signout();

    // Redirect after the countdown
    timer(1000, 1000)
      .pipe(
        finalize(() => {
        this.router.navigate([''])
        }),
        takeWhile(() => this.countdown > 0),
        takeUntil(this._unsubscribeAll),
        tap(() => this.countdown--)
      )
      .subscribe();
  }

}
