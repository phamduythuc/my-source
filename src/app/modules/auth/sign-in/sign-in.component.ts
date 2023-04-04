import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertType} from "../../../../@fuse/components/alert/alert.types";
import {FormBuilder, FormGroup, Validators, NgForm} from "@angular/forms";
import {AuthService} from 'src/app/core/auth/auth.service';
import * as bcrypt from 'bcryptjs';
import {Router} from "@angular/router";
import {TranslocoService} from "@ngneat/transloco";

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
  // activeLang: String | undefined;
  // availableLangs: String[] | {id: string, label: string}[] | undefined;
    @ViewChild('signInNgForm') signInNgForm!: NgForm

    constructor(
      private _formBuilder: FormBuilder,
      private authService: AuthService,
      private router: Router,
      private  translocoService: TranslocoService,
    ) {
    }

    ngOnInit() {
        this.signInForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.maxLength(24), Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/)]]
        })
        console.log(this.authService.signedin$)
      // this.activeLang = this.translocoService.getActiveLang();
      // this.availableLangs = this.translocoService.getAvailableLangs();
    }
  // changeLang(lang: string) {
  //   this.translocoService.setActiveLang(lang);
  //   this.activeLang = lang;
  // }

    signIn() {
        if (this.signInForm.invalid) {
            return;
        }
        this.signInForm.disable();
        this.showAlert = false;

        this.authService.signin(this.signInForm.value).subscribe(res => {
                // this.accessToken = res?.body?.token
                console.log(this.authService.signedin$)
            this.router.navigateByUrl('/')
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
