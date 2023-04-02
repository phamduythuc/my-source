import { TestComponentComponent } from './layouts/test-component/test-component.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './modules/auth/sign-in/sign-in.component';

const routes: Routes = [

  { path: '', component: SignInComponent },
  { path: 'second', component: TestComponentComponent },

  { path: 'name', loadChildren: () => import('./modules/auth/sign-up/sign-up.module').then(m => m.SignUpModule) },

  { path: 'forgot-password', loadChildren: () => import('./modules/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
