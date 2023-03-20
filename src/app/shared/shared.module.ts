import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ViewDialogComponent } from './components/view-dialog/view-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [ConfirmDialogComponent, ViewDialogComponent],
  imports: [CommonModule, MaterialModule],
})
export class SharedModule {}
