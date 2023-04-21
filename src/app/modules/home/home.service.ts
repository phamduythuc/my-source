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
    return this.http.get(`${evnConfig.apiUrl}/course`, {observe: 'response'})
  }
  getDetailCourse(courseId: any): Observable<any> {
    return this.http.get(`${evnConfig.apiUrl}/course/${courseId}`, {observe: 'response'})
  }
  getDataFakeAPI(): Observable<any> {
    return this.http.get('https://643c2b28447794557368e33a.mockapi.io/courseApi/allCource', {observe: 'response'})
  }
}
