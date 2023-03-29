import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AlertComponent} from "./alert.component";
import {MaterialModule} from "../../../app/material/material.module";


@NgModule({
  declarations: [AlertComponent],
  imports: [
    CommonModule,
      MaterialModule
  ],
  exports: [AlertComponent]
})
export class AlertModule { }
