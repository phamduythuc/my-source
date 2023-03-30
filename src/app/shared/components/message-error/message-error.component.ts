import { Component ,Input } from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss']
})
export class MessageErrorComponent {
 @Input() control!: AbstractControl;
 @Input() name: string =''
}
