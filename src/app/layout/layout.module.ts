import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutComponent} from './layout.component';
import {DefaultModule} from "./layouts/default/default.module";
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material/material.module";
import {ThinModule} from "./layouts/thin/thin.module";
import {SettingModule} from "./common/setting/setting.module";
import {EmptyModule} from "./empty/empty.module";

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    DefaultModule,
    EmptyModule,
    CommonModule,
    // DefaultModule,
    SharedModule,
    ThinModule,
    MaterialModule,
    SettingModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {
}
