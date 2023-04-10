import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnCourseRoutingModule } from './learn-course-routing.module';
import { LearnCourseComponent } from './learn-course.component';
import {NgxYoutubePlayerModule} from "ngx-youtube-player";
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "../../material/material.module";


@NgModule({
  declarations: [
    LearnCourseComponent
  ],
    imports: [
        CommonModule,
        LearnCourseRoutingModule,
        NgxYoutubePlayerModule,
        MaterialModule
    ]
})
export class LearnCourseModule { }
