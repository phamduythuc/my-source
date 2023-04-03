import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, tap} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {evnConfig} from "../../../environments/environment";
import {Account} from "../user/user.types";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    signedin$ = new BehaviorSubject<boolean | null>(null)

    constructor(private http: HttpClient) {
    }

    set accessToken(accessToken: string) {
        localStorage.setItem('token', accessToken);
    }

    get accessToken() {
        return localStorage.getItem('token') ?? '';
    }

    signin(credentials: Account): Observable<any> {
        return this.http.post(evnConfig.apiUrl + '/user/login', credentials, {observe: "response"}).pipe(
            tap(() => this.signedin$.next(true))
        )
    }
    signout (): Observable<any> {
        this.signedin$.next(false)
        return  of(false)
    }

    checkAuth(): Observable<boolean> {
        if (this.signedin$) {
           return  of(true)
        }
        // if (!this.signedin$) {
        //     return this.signedin$.next(false);
        // }
        return of(false);

    }
}
