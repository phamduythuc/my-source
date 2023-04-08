import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import {MaterialModule} from "../../../material/material.module";



@NgModule({
  declarations: [
    SliderComponent
  ],
  exports: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule,
    MaterialModule
  ]
})
export class SliderModule { }
