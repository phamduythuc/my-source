import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {SliderModule} from "./slider/slider.module";
import {SliderComponent} from "./slider/slider.component";
import { ItemCourseComponent } from './item-course/item-course.component';
import {MaterialModule} from "../../material/material.module";

@NgModule({
  declarations: [
    HomeComponent,
    ItemCourseComponent,
  ],
  imports: [
    CommonModule,
    SliderModule,
    MaterialModule,
  ]
})
export class HomeModule { }
