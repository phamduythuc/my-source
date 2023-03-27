import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingRoutingModule } from './loading-routing.module';
import { LoadingComponent } from './loading.component';
import {OverlayModule} from "@angular/cdk/overlay";
import {MaterialModule} from "../../../material/material.module";


@NgModule({
  declarations: [
    LoadingComponent
  ],
  exports: [
    LoadingComponent
  ],
  imports: [
    CommonModule,
    LoadingRoutingModule,
    OverlayModule,
    MaterialModule
  ]
})
export class LoadingModule { }
