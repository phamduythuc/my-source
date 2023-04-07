import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ViewDialogComponent } from './components/view-dialog/view-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MaterialModule } from '../material/material.module';
import { TranslocoRootModule } from "../core/transloco/transloco-root.module";
import { TranslocoModule} from "@ngneat/transloco";

export const MAT_MODULES = [
  MatButtonModule,
  TranslocoModule,
  MatDialogModule,
];
@NgModule({
  declarations: [ConfirmDialogComponent, ViewDialogComponent],
  imports: [CommonModule, MaterialModule,TranslocoRootModule,...MAT_MODULES],
  exports: [...MAT_MODULES]
})
export class SharedModule {}
