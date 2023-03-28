import { Component, Input } from '@angular/core';
import {AlertAppearance, AlertType} from './alert.types'
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent {
  @Input() appearance: AlertAppearance = "soft";
  @Input() typeAlert: AlertType = 'primary';
  @Input() showIcon: boolean = true;


}
