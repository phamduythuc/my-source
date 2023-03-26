
import { LoadingComponent } from './loading.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../../../app/material/material.module";

@NgModule({
  declarations: [LoadingComponent],
  imports: [CommonModule, MaterialModule],
  exports: [LoadingComponent],
})
export class LoadingModule {}
