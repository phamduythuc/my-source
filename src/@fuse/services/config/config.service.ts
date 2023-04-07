import { Injectable } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BehaviorSubject, Observable} from "rxjs";
import {LayoutTypes} from "../../../app/layout/layout.types";

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private _layout = new BehaviorSubject<LayoutTypes>('default');
  layout$ = this._layout.asObservable();
  constructor(private route: ActivatedRoute) { }

  setLayout(layout: any) {
    return this._layout.next(layout);

  }
}
