import {Component, TemplateRef, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
// import { ConfigService } from 'src/@fuse/services/config/config.service';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';
import {Overlay, OverlayRef} from "@angular/cdk/overlay";
import {ConfigService} from "../../../../@fuse/services/config/config.service";
import {TemplatePortal} from "@angular/cdk/portal";
import {LayoutTypes} from "../../layout.types";
import {BehaviorSubject} from "rxjs";

// import {toggleAnimation} from "./toggleAnimation";


@Component({
    selector: 'app-setting',
    templateUrl: './setting.component.html',
    styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements  OnInit {
    // overlayRef!: OverlayRef;
    displayItem = [
        'Default',
        // 'Classic',
        // 'Classy',
        // 'Compact',
        // 'Futuristic',
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
    overlayRef!: OverlayRef

    layout: LayoutTypes = "default"
    constructor(
        private configService: ConfigService,
        private overlay: Overlay,
        private viewContainerRef: ViewContainerRef
    ) {
    }

    ngOnInit() {
         this.configService.layout$.subscribe(result => {
             this.layout = result
         })

    }

    setLayout(layout: LayoutTypes) {
      this.configService.setLayout(layout);

    }
    dialogRef: any;

    openSetting() {

        this.overlayRef = this.overlay.create({
            hasBackdrop: true,
            positionStrategy: this.overlay.position().global().right()
        })
        this.overlayRef.attach(new TemplatePortal(this.showNavSetting, this.viewContainerRef))
        this.overlayRef.backdropClick().subscribe(() => {
            this.overlayRef.detach();
        })

    }

    closeDialog() {
        this.overlayRef.detach();
    }
}
