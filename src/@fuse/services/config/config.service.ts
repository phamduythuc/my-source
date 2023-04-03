import { Injectable } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _layout = new BehaviorSubject<string>('default');
  layout$ = this._layout.asObservable();
  constructor(private route: ActivatedRoute) { }

  setLayout(layout: any) {
    return this._layout.next(layout);

  }
}
