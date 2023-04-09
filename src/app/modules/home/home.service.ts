import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {evnConfig} from "../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<any> {
    return this.http.get('http://localhost:3000/api/v1/course', {observe: 'response'})
  }
}
