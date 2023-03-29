import {Component, OnInit} from '@angular/core';
import {AlertType} from "../../../../@fuse/components/alert/alert.types";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit{
  hide = true;
  alert : {type: AlertType, message: string}= {
    type: 'success',
    message: 'Login failed'
  }
  showAlert: boolean = false;
  signInForm! : FormGroup ;
  constructor(private _formBuilder: FormBuilder) {
  }
  ngOnInit() {
    this.signInForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
    console.log(this.signInForm)
  }
}
