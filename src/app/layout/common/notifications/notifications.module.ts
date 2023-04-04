import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsComponent } from './notifications.component';
import {MaterialModule} from "../../../material/material.module";



@NgModule({
    declarations: [
        NotificationsComponent
    ],
    exports: [
        NotificationsComponent,
    ],
    imports: [
        CommonModule,
        MaterialModule
    ]
})
export class NotificationsModule { }
