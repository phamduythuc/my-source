import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';
import {MaterialModule} from "../../../material/material.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MessageErrorModule} from "../../../shared/components/message-error/message-error.module";
import {SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [
    SignUpComponent
  ],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    MessageErrorModule,
    SharedModule
  ]
})
export class SignUpModule { }
