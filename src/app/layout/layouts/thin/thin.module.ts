import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThinComponent } from './thin.component';
import {AppRoutingModule} from "../../../app-routing.module";
import {LanguagesModule} from "../../common/languages/languages.module";
import {NotificationsModule} from "../../common/notifications/notifications.module";
import {UserModule} from "../../common/user/user.module";
import {MaterialModule} from "../../../material/material.module";



@NgModule({
  declarations: [
    ThinComponent
  ],
  exports: [
    ThinComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    LanguagesModule,
    NotificationsModule,
    UserModule,
      MaterialModule
  ]
})
export class ThinModule { }
