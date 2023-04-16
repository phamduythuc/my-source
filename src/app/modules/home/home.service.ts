import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {evnConfig} from "../../../environments/environment";
import {Observable} from "rxjs";
import {utilsCommonService} from "../../shared/utillsCommon.service";

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor(private http: HttpClient) {
  }

  getCourses(): Observable<any> {
    return this.http.get('http://localhost:3000/api/v1/course', {observe: 'response'})
  }
  getDataFakeAPI(): Observable<any> {
    return this.http.get('https://643c2b28447794557368e33a.mockapi.io/courseApi/allCource', {observe: 'response'})
  }
}
