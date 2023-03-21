import { Component } from '@angular/core';
import { BaseComponent } from '../../core/base.component';
import { ViewDialogComponent } from '../../shared/components/view-dialog/view-dialog.component';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent extends BaseComponent {
  onOpen() {
    this.showDialog(ViewDialogComponent, { width: '50vw' });
  }
  onOpenSnackbar() {
    this.showSnackbar('ok', 'warning');
  }
}
