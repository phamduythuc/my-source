import { Directive, TemplateRef, ViewContainerRef} from '@angular/core';
import {Overlay, OverlayRef} from "@angular/cdk/overlay";
import {TemplatePortal} from "@angular/cdk/portal";

@Directive({
  selector: '[appOverlay]'
})
export class OverlayDirective {
private overlayRef: any
  constructor(
    private overlay: Overlay,
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {

  }

  showOverlay() {
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position().global().centerHorizontally().centerVertically(),
      hasBackdrop: true,
      backdropClass: 'overlay-class'
    })
    this.overlayRef.attach(new TemplatePortal(this.templateRef, this.viewContainerRef));
  }
}
