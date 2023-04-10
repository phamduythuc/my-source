import {Component, TemplateRef, ViewChild, ViewContainerRef} from '@angular/core';
import { ConfigService } from 'src/@fuse/services/config/config.service';
import {LayoutTypes} from "../../layout.types";
import {Overlay, OverlayRef} from "@angular/cdk/overlay";
import {TemplatePortal} from "@angular/cdk/portal";

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent {
  overlayRef! : OverlayRef;
  @ViewChild('showNavSetting') show!
      : TemplateRef<any>
constructor(private configService: ConfigService, private overlay : Overlay, private viewContainerRef: ViewContainerRef) {
}

  addLayoutDefault (layout: LayoutTypes) {
    this.configService.setLayout(layout);
  }
  addLayoutThin (layout: LayoutTypes) {
    this.configService.setLayout(layout);

  }
  openSetting() {
    this.overlayRef = this.overlay.create({
      hasBackdrop: true,
      positionStrategy: this.overlay.position().global().centerHorizontally().left()
    })
    console.log(this.viewContainerRef)
    this.overlayRef.attach(new TemplatePortal(this.show, this.viewContainerRef))
    this.overlayRef.backdropClick().subscribe(() => {
      this.overlayRef.detach();
    })
  }
}
