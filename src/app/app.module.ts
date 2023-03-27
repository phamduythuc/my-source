import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignInModule } from './modules/auth/sign-in/sign-in.module';
import { TestComponentComponent } from './layouts/test-component/test-component.component';
import { SharedModule } from './shared/shared.module';

import { MaterialModule } from './material/material.module';
import {LoadingModule} from "./fuse/components/loading/loading.module";
@NgModule({
  declarations: [AppComponent, TestComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SignInModule,
    SharedModule,
    MaterialModule,
    LoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
