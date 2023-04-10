import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './modules/auth/sign-in/sign-in.component';
import {LayoutComponent} from "./layout/layout.component";
import {AuthGuard} from "./core/auth/guand/auth.guard";

import {EmptyComponent} from "./layout/empty/empty.component";
import {HomeComponent} from "./modules/home/home.component";


const routes: Routes = [
  {
    path: '',
    component: EmptyComponent,
    children: [
      {
        path: '',
        component: LayoutComponent,
        children: [
          {
            path: '',
            component: HomeComponent
          },
          { path: 'detail-course', loadChildren: () => import('./modules/detail-course/detail-course.module').then(m => m.DetailCourseModule) },
          { path: 'learn', loadChildren: () => import('./modules/learn-course/learn-course.module').then(m => m.LearnCourseModule) },
        ]

      },
      {
        path: 'sign-in',
        loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)
      },
      {
        path: 'sign-up',
        loadChildren: () => import('./modules/auth/sign-up/sign-up.module').then(m => m.SignUpModule)
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('./modules/auth/forgot-password/forgot-password.module').then(m => m.ForgotPasswordModule)
      },
      {
        path: 'sign-out',
        canLoad: [AuthGuard],
        loadChildren: () => import('./modules/auth/sign-out/sign-out.module').then(m => m.SignOutModule)
      },
    ]
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {

}
