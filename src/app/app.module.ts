import {ErrorHandler, NgModule} from '@angular/core';
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
import {LanguagesModule} from "./layout/common/languages/languages.module";
import {ErrorGlobal} from "./core/errors/error-global";


@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        SignInModule,
        // SharedModule,
        MaterialModule,
        LayoutModule,
        HttpClientModule,
        FuseModule,
        LanguagesModule
    ],
    providers: [
      {
        provide: ErrorHandler,
        useClass: ErrorGlobal,

      },
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
