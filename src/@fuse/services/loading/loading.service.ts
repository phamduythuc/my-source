import { LoadingComponent } from './../../components/loading/loading.component';
import { Injectable, ViewContainerRef } from '@angular/core';
import { BlockScrollStrategy, Overlay } from '@angular/cdk/overlay';
import { ViewportRuler } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private overlayRef = this.overlay.create({
    positionStrategy: this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically(),
    scrollStrategy: new BlockScrollStrategy(this.viewport, window.document),
    hasBackdrop: true,
    panelClass: 'overlay',
  });
  // private overlayComponentRef;

  constructor(private overlay: Overlay, private viewport: ViewportRuler) {}

  showLoader(viewContainer?: ViewContainerRef) {
    if (!this.overlayRef.hasAttached()) {
      this.overlayRef.attach(
        new ComponentPortal(LoadingComponent, viewContainer)
      );
    }
  }

  hideLoader() {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }

  ngOnDestroy() {
    if (this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
    this.overlayRef.dispose();
  }
}
