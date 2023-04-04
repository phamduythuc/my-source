import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInRoutingModule } from './sign-in-routing.module';
import { SignInComponent } from './sign-in.component';
import {MaterialModule} from "../../../material/material.module";
import {AlertModule} from "../../../../@fuse/components/alert/alert.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MessageErrorModule} from "../../../shared/components/message-error/message-error.module";
import {TranslocoModule} from "@ngneat/transloco";


@NgModule({
  declarations: [
    SignInComponent
  ],
    imports: [
        CommonModule,
        SignInRoutingModule,
        MaterialModule,
        AlertModule,
        FormsModule,
        ReactiveFormsModule,
        MessageErrorModule,
        TranslocoModule
    ],
    exports:[SignInComponent]
})
export class SignInModule { }
