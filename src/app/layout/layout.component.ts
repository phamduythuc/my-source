import { Component } from '@angular/core';
import {ConfigService} from "../../@fuse/services/config/config.service";
import {ActivatedRoute} from "@angular/router";
import {LayoutTypes} from "./layout.types";
import {AuthService} from "../core/auth/auth.service";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  layout: LayoutTypes = 'default';
  constructor(private config: ConfigService, private router: ActivatedRoute, private auth: AuthService) {
  }
  ngOnInit() {
    console.log(this.router.snapshot.data['layout']);
  }
}
