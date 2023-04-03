import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {DefaultModule} from "./layouts/default/default.module";




@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
      DefaultModule,

  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
