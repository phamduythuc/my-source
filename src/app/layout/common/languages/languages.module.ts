import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages.component';
import {MaterialModule} from "../../../material/material.module";
import {TranslocoModule} from "@ngneat/transloco";


@NgModule({
  declarations: [
    LanguagesComponent
  ],
  exports: [
    LanguagesComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    TranslocoModule,

  ]
})
export class LanguagesModule { }
