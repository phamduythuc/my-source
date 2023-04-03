import { Injectable } from '@angular/core';
import { CanLoad, Route, UrlSegment, UrlTree } from '@angular/router';
import {Observable, skipWhile, take, tap} from 'rxjs';
import {AuthService} from "../auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {
  constructor(private auth : AuthService) {
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true
  }
}
