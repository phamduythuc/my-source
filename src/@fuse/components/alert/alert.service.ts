import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  dismissed:boolean = false
  constructor() {
  }
  dimissAlert(): void {
    this.dismissed = true;
  }
}
