import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ViewDialogComponent } from './components/view-dialog/view-dialog.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    ViewDialogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
