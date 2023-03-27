import { TestComponentComponent } from './layouts/test-component/test-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';

const routes: Routes = [

  { path: '', component: SignInComponent },
  { path: 'second', component: TestComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
