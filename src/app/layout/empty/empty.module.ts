import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyComponent } from './empty.component';
import {RouterOutlet} from "@angular/router";
import {AppRoutingModule} from "../../app-routing.module";



@NgModule({
  declarations: [
    EmptyComponent
  ],
    imports: [
        CommonModule,
        AppRoutingModule,
        RouterOutlet
    ]
})
export class EmptyModule { }
