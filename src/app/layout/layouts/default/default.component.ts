import {Component, Injector, OnInit} from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";
import {BehaviorSubject} from "rxjs";
import { Router } from '@angular/router';
import {BaseComponent} from "../../../core/base.component";
import {LanguagesComponent} from "../../common/languages/languages.component";

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class DefaultComponent extends BaseComponent implements OnInit {
    signin$: BehaviorSubject<boolean>;

    constructor(private auth: AuthService,private router: Router, private injector: Injector) {
        super(injector)
        this.signin$ = this.auth.signedin$

    }

    ngOnInit() {
        this.auth.checkAuth().subscribe(() =>{})
        console.log(this.signin$);
    }
    logout(): void {
            this.auth.signout().subscribe();
                // this.router.navigateByUrl('/')

        console.log(this.signin$);
        }

}
