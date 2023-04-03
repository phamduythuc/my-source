import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import {MaterialModule} from "../../../material/material.module";
import {RouterLink} from "@angular/router";
import {AppRoutingModule} from "../../../app-routing.module";



@NgModule({
  declarations: [
    DefaultComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MaterialModule,
    RouterLink,

  ],
  exports: [DefaultComponent]
})
export class DefaultModule { }
