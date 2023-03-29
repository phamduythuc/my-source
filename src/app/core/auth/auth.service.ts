import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {evnConfig} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signedin$ = new BehaviorSubject(null)
  constructor(private http: HttpClient) { }

  signin(credentials: any): Observable<any> {
    return this.http.post(evnConfig.apiUrl + 'user/login', credentials)
  }
}
