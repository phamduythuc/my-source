
import { Component, OnInit, Injector, ViewContainerRef } from '@angular/core';
import { BaseComponent } from '../../core/base.component';
import { ViewDialogComponent } from '../../shared/components/view-dialog/view-dialog.component';
import { delay, of } from 'rxjs';
import {LoadingService} from "../../../@fuse/services/loading/loading.service";
import {TestService} from "../../../@fuse/services/test.service";
const ELEMENT_DATA: any = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss'],
})
export class TestComponentComponent extends BaseComponent implements OnInit {
  constructor(
    injector: Injector,
    private loaderService: LoadingService,
    private viewContainerRef: ViewContainerRef,
    private user: TestService
  ) {
    super(injector);
  }
  // ngOnInit(): void {
  //   this.loadData();
  // }
  dataSource: any;
  onOpen() {
    this.showDialog(ViewDialogComponent, { width: '50vw' });
  }
  onOpenSnackbar() {
    this.showSnackbar('ok', 'warning');
  }
  onReload() {
    this.loadData();
  }
  private loadData() {
    this.loaderService.showLoader(this.viewContainerRef);
    this.fetchDataWithLatency(15000).subscribe((data: any) => {
      this.loaderService.hideLoader();
      this.dataSource = data;
    });
  }
  fetchDataWithLatency(latency: number) {
    // Trả về một Observable với dữ liệu giả lập
    return of([
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
      { id: 4, name: 'Item 4' },
      { id: 5, name: 'Item 5' },
    ]).pipe(delay(latency));
  }
  getUserApp() {
    this.user.getUser().subscribe((res) => console.log(res));
  }
}
