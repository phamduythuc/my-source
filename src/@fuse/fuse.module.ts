import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoadingModule} from "./components/loading/loading.module";
import { AlertComponent } from './components/alert/alert.component';




@NgModule({
    declarations: [

    ],

    imports: [
        CommonModule,
        LoadingModule,

    ]
})
export class FuseModule { }
