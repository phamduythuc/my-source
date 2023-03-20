import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BaseComponent} from "./base.component";
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from "@angular/material/button";


@NgModule({
  declarations: [BaseComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    // MatSnackBarModule
  ]
})
export class CoreModule { }
