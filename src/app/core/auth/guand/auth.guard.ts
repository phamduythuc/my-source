import { Injectable } from '@angular/core';
import {CanLoad, Route, Router, UrlSegment, UrlTree} from '@angular/router';
import {Observable, skipWhile, take, tap} from 'rxjs';
import {AuthService} from "../auth.service";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private auth : AuthService, private router: Router) {
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.auth.signedin$.pipe(
        take(1),
        map((signedin) => {
          if (!signedin) {
            this.router.navigateByUrl('/signin');
          }
          return signedin;
        })
    );
  }
}
