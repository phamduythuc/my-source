import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterOutlet} from "@angular/router";
import {HomeComponent} from "./home.component";
import { SharedModule} from "../../shared/shared.module";


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterOutlet,
    // SharedModule
  ]
})
export class HomeModule { }
