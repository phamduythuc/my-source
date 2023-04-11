import {Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
// import { ConfigService } from 'src/@fuse/services/config/config.service';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
// import {toggleAnimation} from "./toggleAnimation";


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  // animations: [toggleAnimation]
})
export class SettingComponent {
  // overlayRef!: OverlayRef;
  displayItem = [
    'Empty',
    'Classic',
    'Classy',
    'Compact',
    'Futuristic',
    'Thin'
  ]
  schemeOption = [
    {name: 'Auto', icon: "bolt"},
    {name: 'Light', icon: "sunny"},
    {name: 'Dark', icon: "cloudy"}
  ];
  themeOption = [
    {name: 'Default', color: "#4F46E5"},
    // {name: 'Brand', color: "#2196F3"},
    // {name: 'Teal', color: "#0D94E5"},
    {name: 'Rose', color: "#F43F5E"},
    {name: 'Purple', color: "#9333EA"},
    {name: 'Amber', color: "#F59E0B"},
  ];
  @ViewChild('showNavSetting') showNavSetting!
    : TemplateRef<any>

  constructor(
    // private configService: ConfigService,
    // private overlay: Overlay,
    public dialog: Dialog
    ) {
  }

  // addLayoutDefault(layout: LayoutTypes) {
  //   this.configService.setLayout(layout);
  // }

  // addLayoutThin(layout: LayoutTypes) {
  //   this.configService.setLayout(layout);
  //
  // }
  dialogRef: any;
  openSetting() {
    this.dialogRef = this.dialog.open(this.showNavSetting, {
    })
    this.dialogRef.closed.subscribe((res: any )=> {
      console.log('The dialog was closed');
      // /viet code xu ly phia sau o day
    });
  }
  closeDialog() {
    this.dialogRef.close();
  }
}
