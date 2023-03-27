import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import  {SignInComponent} from "./modules/auth/sign-in/sign-in.component";

const routes: Routes = [
  {path: '', component: SignInComponent},
  // { path: 'loading', loadChildren: () => import('./fuse/loading/loading.module').then(m => m.LoadingModule) },
  { path: 'loading', loadChildren: () => import('./fuse/components/loading/loading.module').then(m => m.LoadingModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
