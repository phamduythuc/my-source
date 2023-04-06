import {Component, Input, HostBinding, OnInit} from '@angular/core';
import {SearchTypes} from "../../layout.types";
import {searchAnimation} from "./searchAnimation";


@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    animations: [searchAnimation]
})
export class SearchComponent {
    @Input() appearance: SearchTypes = 'default';
    opened: boolean = false
    text: string = 'hidden'
    reusult :any;

    @HostBinding('class') get classList() {
        return {
            'search-bar': this.opened
        }
    }

    ngOnInit(): void {
        this.reusult = [
            {
            label: 'nodejs', img: ''
            },
            {
                label: 'nodejs', img: ''
            }

        ]
    }

    open() {
        this.opened = true

    }

    close() {
        this.opened = false

    }
}
