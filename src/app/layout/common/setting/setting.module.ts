import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingComponent} from "./setting.component";
import {MaterialModule} from "../../../material/material.module";



@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [SettingComponent]
})
export class SettingModule { }
