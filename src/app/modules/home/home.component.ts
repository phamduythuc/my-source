import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";
import { AccountService } from 'src/app/core/auth/account.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges{
  lang: any;
  constructor(private translocoService: TranslocoService, private accountService: AccountService) {
    this.changeLang();
  }
  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
  }
  changeLang() {
    this.translocoService.langChanges$.subscribe(() =>{
      this.lang = this.translocoService.getActiveLang();
    })
    return this.lang
  }

}
