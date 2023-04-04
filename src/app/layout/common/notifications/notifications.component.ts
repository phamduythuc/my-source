import {Component, ElementRef, ViewChild, ViewContainerRef} from '@angular/core';
import {Overlay, OverlayRef} from "@angular/cdk/overlay";
import {TemplatePortal} from "@angular/cdk/portal";

@Component({
    selector: 'app-notifications',
    templateUrl: './notifications.component.html',
    styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent {
    @ViewChild('notificationBox') notificationBox!: ElementRef<any> | any
    @ViewChild('btnNotification') btnNotification!: ElementRef<any> | any
    overlayRef!: OverlayRef


    constructor(private overlay: Overlay, private viewContainerRef: ViewContainerRef) {
    }

    ngOnInit(): void {

        console.log(this.btnNotification)
    }

    openNotification() {
        console.log(this.btnNotification._elementRef.nativeElement)
        if(!this.overlayRef) {
            this.createOverlay();
        }
        this.overlayRef.attach(new TemplatePortal(this.notificationBox, this.viewContainerRef))
    }

    createOverlay() {
        this.overlayRef = this.overlay.create({
            positionStrategy: this.overlay.position().flexibleConnectedTo(this.btnNotification._elementRef.nativeElement).withLockedPosition(true).withPush(true).withPositions([
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'center',

                }
            ]),
            scrollStrategy: this.overlay.scrollStrategies.block()
        })
    }
}
