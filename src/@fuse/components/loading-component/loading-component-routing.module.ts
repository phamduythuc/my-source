import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingComponentComponent } from './loading-component.component';

const routes: Routes = [{ path: '', component: LoadingComponentComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingComponentRoutingModule { }
