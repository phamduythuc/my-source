import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import {DefaultModule} from "./layouts/default/default.module";
import {ThinModule} from "./layouts/thin/thin.module";
import { SettingComponent } from './common/setting/setting.component';




@NgModule({
  declarations: [
    LayoutComponent,
    SettingComponent
  ],
    imports: [
        CommonModule,
        DefaultModule,
        ThinModule,

    ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
