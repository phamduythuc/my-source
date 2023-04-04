// import { LoadingM } from './fuse/components/loading/loading.module';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignInModule} from './modules/auth/sign-in/sign-in.module';


import {FuseModule} from "../@fuse/fuse.module";

import {SharedModule} from './shared/shared.module';

import {MaterialModule} from './material/material.module';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {LayoutModule} from "./layout/layout.module";

import {LoadingInterceptor} from "../@fuse/services/loading/loading.interceptor";
import {ReactiveFormsModule} from "@angular/forms";
import { TranslocoRootModule } from './transloco-root.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SignInModule,
        SharedModule,
        MaterialModule,
        LayoutModule,
        HttpClientModule,
        FuseModule,
        TranslocoRootModule,
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: LoadingInterceptor,
            multi: true,
        },

    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}
