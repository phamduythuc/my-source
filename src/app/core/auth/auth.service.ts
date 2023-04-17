import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, of, switchMap, throwError} from "rxjs";
import {catchError, tap} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {evnConfig} from "../../../environments/environment";
import {Account, AccountSignup} from "../user/user.types";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    signedin$ = new BehaviorSubject<any>(this.accessToken)

    constructor(private http: HttpClient) {
    }

    get valueToken() {
        return this.signedin$.value;
    }
    set accessToken(accessToken: string) {
        localStorage.setItem('token', accessToken);
    }

    get accessToken() {
        return localStorage.getItem('token') ?? '';
    }

    signin(credentials: Account): Observable<any> {
        console.log(this.signedin$)
      if (this.signedin$.value) {
        throw new Error('Bạn đang đăng nhập')
      }
        return this.http.post(evnConfig.apiUrl + '/user/login', credentials, {observe: "response"}).pipe(
            map((res: any) => {
                this.accessToken = res?.body.token;
                this.signedin$.next(this.accessToken)
                return res;
            }),
            catchError((err) => {
                this.signedin$.next(null);
                return throwError(err)
            })
        )
    }
    signup( account: AccountSignup): Observable<any> {
      return this.http.post(evnConfig.apiUrl + '/user/signup', account, {observe: "response"}).pipe(
        map((res: any) => {
          this.accessToken = res.body.token;
          this.signedin$.next(this.accessToken)
          return res
        }),
        catchError( (err) => {
          this.signedin$.next(null);
          return  throwError(err);
        })
      )
    }
    signout(): Observable<any> {
        this.signedin$.next(false);
        localStorage.removeItem('token')

        return of(false)
    }

    checkAuth(): Observable<boolean> {
        if (this.signedin$) {
            return of(true)
        }
        if(!this.accessToken) {
            return of(false)
        }
        return of(true);

    }
}
