import {Component, OnInit, Input} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.scss']
})
export class MessageErrorComponent {
  @Input() control!: AbstractControl | any;
  @Input() name: string = ''
  private errorMessage: {[key: string]: any} = {
    required: (params: any, name: any) => `${name} required field`
  }
  showError(): boolean {
    return this.control.errors && (this.control.dirty || this.control.touched)
  }

  listOfErrors ()  {
     return  Object.keys(this.control.errors).map(field => this.getErrorMessage(field, this.control.errors[field]))

  }

  getErrorMessage(type: string, params: any) {
    console.log(this.errorMessage[type])
    if (this.errorMessage[type]) {
      return this.errorMessage[type](params, this.name);

    }
  }
}
