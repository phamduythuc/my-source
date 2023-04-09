import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {MaterialModule} from "../../../material/material.module";
import {RouterLink} from "@angular/router";
import {AppRoutingModule} from "../../../app-routing.module";
import {NotificationsModule} from "../../common/notifications/notifications.module";
import {UserModule} from "../../common/user/user.module";
import {SearchModule} from "../../common/search/search.module";
import {LanguagesModule} from "../../common/languages/languages.module";
import {TranslocoModule} from "@ngneat/transloco";



@NgModule({
  declarations: [
    DefaultComponent
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        MaterialModule,
        RouterLink,
        NotificationsModule,
        UserModule,
        SearchModule,
        LanguagesModule,
        TranslocoModule

    ],
  exports: [DefaultComponent]
})
export class DefaultModule { }
