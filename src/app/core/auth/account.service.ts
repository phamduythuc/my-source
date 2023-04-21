import {Injectable} from '@angular/core';
import {AccountSignup} from "../user/user.types";
import {map, Observable, tap, throwError} from "rxjs";
import {evnConfig} from "../../../environments/environment";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    user: any

    constructor(private http: HttpClient) {
    }

    getAccount() {
        this.authencation().subscribe()
    }

    authencation(): Observable<any> {
        return this.http.get(evnConfig.apiUrl + '/user/account', {observe: "response"}).pipe(tap(account => {
            return account
        }))
    }

}
