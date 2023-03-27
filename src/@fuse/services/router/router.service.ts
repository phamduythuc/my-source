import { Injectable } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { LoadingService } from '../loading/loading.service';
@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private router: Router, private loadingService: LoadingService) {
    this.router.events.subscribe((event) => {
      console.log(event);

      // if (event instanceof NavigationStart) {
      //   this.loadingService.showLoader(); // Hiển thị loading process
      // } else if (event instanceof NavigationEnd) {
      //   this.loadingService.hideLoader(); // Ẩn loading process
      // }
    });
  }
}
