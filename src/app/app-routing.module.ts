import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './modules/auth/sign-in/sign-in.component';
import {LayoutComponent} from "./layout/layout.component";
import {SignInModule} from "./modules/auth/sign-in/sign-in.module";
import {AuthGuard} from "./core/auth/guand/auth.guard";

const routes: Routes = [
    // {
    //     path: '', pathMatch: 'full', redirectTo: ''
    // },
    {

        path: '', canLoad: [AuthGuard], component: LayoutComponent, data: {layout: 'default'} ,
        // children: [{
        //     path: 'signin',
        //     loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)
        // }]
    },
    {
        path: 'signin',
        loadChildren: () => import('./modules/auth/sign-in/sign-in.module').then(m => m.SignInModule)
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {
}
