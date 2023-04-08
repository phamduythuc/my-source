import { Component, Injector, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { take } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-base',
  template: '',
  styles: [],
})
export class BaseComponent {
  public dialogService: MatDialog;
  public snackbarService: MatSnackBar;

  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(injector: Injector) {
    this.dialogService = injector.get(MatDialog);
    this.snackbarService = injector.get(MatSnackBar);
  }

  showDialog(component?: any, option: MatDialogConfig = {}, callback?: any) {
    const ref = this.dialogService.open(component, {
      width: '30vw',
      ...option,
    });
    ref
      .afterClosed()
      .pipe(take(1))
      .subscribe((value) => callback && callback(value));
  }

  showSnackbar(messages: string, type?: string) {
    this.snackbarService.open(messages, 'done', {
      panelClass:
        type === 'success'
          ? 'bg-lime-500'
          : type === 'warning'
          ? 'bg-yellow-500'
          : 'bg-red-500',
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: 3000
    });
  }
}
