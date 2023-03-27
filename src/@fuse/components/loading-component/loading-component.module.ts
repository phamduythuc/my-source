import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponentRoutingModule } from './loading-component-routing.module';
import { LoadingComponentComponent } from './loading-component.component';


@NgModule({
  declarations: [
    LoadingComponentComponent
  ],
  imports: [
    CommonModule,
    LoadingComponentRoutingModule
  ]
})
export class LoadingComponentModule { }
