import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../core/auth/auth.service";
import {BehaviorSubject} from "rxjs";
import { Router } from '@angular/router';

@Component({
    selector: 'app-default',
    templateUrl: './default.component.html',
    styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
    signin$: BehaviorSubject<boolean>;

    constructor(private auth: AuthService,private router: Router) {
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
