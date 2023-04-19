import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingComponent} from "./setting.component";
import {MaterialModule} from "../../../material/material.module";
import { SharedModule} from "../../../shared/shared.module";


@NgModule({
  declarations: [SettingComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [SettingComponent]
})
export class SettingModule { }
