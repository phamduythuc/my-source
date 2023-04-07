import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguagesComponent } from './languages.component';
import {MaterialModule} from "../../../material/material.module";
import {TranslocoModule} from "@ngneat/transloco";
import {TranslocoRootModule} from "../../../core/transloco/transloco-root.module";


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
    TranslocoRootModule,

  ]
})
export class LanguagesModule { }
