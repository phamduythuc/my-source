import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {MatInputModule} from "@angular/material/input";
import {MatLegacyButtonModule} from "@angular/material/legacy-button";
import {MatIconModule} from "@angular/material/icon";
import {MaterialModule} from "../../../material/material.module";



@NgModule({
    declarations: [
        SearchComponent
    ],
    exports: [
        SearchComponent
    ],
    imports: [
        CommonModule,


        MaterialModule
    ]
})
export class SearchModule { }
