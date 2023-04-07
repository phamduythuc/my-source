import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {DefaultModule} from "./layouts/default/default.module";
import {HomeModule} from "./home/home.module";
import {SharedModule} from "../shared/shared.module";
import {ThinModule} from "./layouts/thin/thin.module";

@NgModule({
    declarations: [
        LayoutComponent
    ],
    imports: [
        CommonModule,
        DefaultModule,

        HomeModule,
        CommonModule,
        // DefaultModule,
        SharedModule,
        ThinModule
    ],
    exports: [LayoutComponent]
})
export class LayoutModule {
}
