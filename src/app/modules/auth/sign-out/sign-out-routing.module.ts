import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignOutComponent } from './sign-out.component';
import {SharedModule} from "../../../shared/shared.module";

const routes: Routes = [{ path: '', component: SignOutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule,SharedModule]
})
export class SignOutRoutingModule { }
