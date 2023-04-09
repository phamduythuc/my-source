import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCourseRoutingModule } from './detail-course-routing.module';
import { DetailCourseComponent } from './detail-course.component';
import {MaterialModule} from "../../material/material.module";


@NgModule({
  declarations: [
    DetailCourseComponent
  ],
    imports: [
        CommonModule,
        DetailCourseRoutingModule,
        MaterialModule
    ]
})
export class DetailCourseModule { }
