import {Component, Injector, Inject, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import {AuthService} from "../../../core/auth/auth.service";
import {BaseComponent} from "../../../core/base.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent extends BaseComponent implements OnInit  {
  signUpForm!: FormGroup;
  idCheck: any;
  @ViewChild('signUpNgForm') signInNgForm!: NgForm
  hide:boolean = true;
  constructor(
    private _formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private injector: Injector) {
    super(injector)
    this.signUpForm = this._formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required ],
      password: ['',
        [ Validators.required,
          Validators.maxLength(24),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,24}$/)]
      ],
      confirmPassword: ['', Validators.required]
    },{
      validator: this.matchingPasswords('password', 'confirmPassword')
    })
  }

  ngOnInit(){
  }
  matchingPasswords(passwordKey: string, confirmPasswordKey: string) {
    return (group: FormGroup) => {
      const password = group.controls[passwordKey];
      const confirmPassword = group.controls[confirmPasswordKey];

      if (password.value !== confirmPassword.value) {
        confirmPassword.setErrors({ mismatchedPasswords: true });
      } else {
        confirmPassword.setErrors(null);
      }
    };
  }

  onSubmit (val: any) {
    console.log(val)
    const params = {
      "name": val.fullName,
      "email": val.email,
      "password": val.password,
      "passwordConfirm": val.confirmPassword
    }
    this.authService.signup(params).subscribe((res) =>{
      if ( res.status === 201) {
        console.log('aa')
          this.showSnackbar('Account successfully created!', 'success');
          this.route.navigate(['/signin']);
      }
    })
  }
}

