import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './modules/auth/sign-in/sign-in.component';
import {LayoutComponent} from "./layout/layout.component";
import {AuthGuard} from "./core/auth/guand/auth.guard";
import {HomeComponent} from "./layout/home/home.component";

const routes: Routes = [
    // {
    //     path: '', pathMatch: 'full', redirectTo: '',
    // },
    // {

        // path: '', canLoad: [AuthGuard], component: LayoutComponent, data: {layout: 'default'},
        // children: [{
        //     path: 'sign-in',
        //     loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)
        // }]
    // },

    {
      path: '',
      component: HomeComponent,
      children: [
        {
          path: '',
          component: LayoutComponent,
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
