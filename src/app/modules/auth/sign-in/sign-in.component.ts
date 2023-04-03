import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertType} from "../../../../@fuse/components/alert/alert.types";
import {FormBuilder, FormGroup, Validators, NgForm} from "@angular/forms";
import {AuthService} from 'src/app/core/auth/auth.service';
import * as bcrypt from 'bcryptjs';
import {Router} from "@angular/router";

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    hide = true;
    alert: { type: AlertType, message: string } = {
        type: 'success',
        message: 'Login failed'
    }
    showAlert: boolean = false;
    signInForm!: FormGroup;
    @ViewChild('signInNgForm') signInNgForm!: NgForm

    constructor(private _formBuilder: FormBuilder, private authService: AuthService) {
    }

    ngOnInit() {
        this.signInForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.maxLength(24), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/)]]
        })
    }

    set accessToken(accessToken: string) {
        localStorage.setItem('token', accessToken);
    }

    get accessToken() {
        return localStorage.getItem('token') ?? '';
    }

    signIn() {
        if (this.signInForm.invalid) {
            return;
        }
        this.signInForm.disable();
        this.showAlert = false;

        this.authService.signin(this.signInForm.value).subscribe(res => {
                this.accessToken = res?.body?.token
            },
            error => {
                this.signInForm.enable();
                this.signInNgForm.resetForm()

                this.showAlert = true
                this.alert = {
                    type: 'error',
                    message: "Login failed"
                }
            }
        )
    }
}
