import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages.component';
import {MaterialModule} from "../../../material/material.module";



@NgModule({
  declarations: [
    LanguagesComponent
  ],
  exports: [
    LanguagesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class LanguagesModule { }
