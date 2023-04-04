import {Component, OnInit} from '@angular/core';
import {TranslocoService} from "@ngneat/transloco";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit{
  flagCode: any;
  langs = [
    {id: 'en', label: 'English'},
    {id: 'vi', label: 'Việt Nam'}
  ]
  // activeLang = 'vi';
  activeLang: String | undefined;
  availableLangs: String[] | {id: string, label: string}[] | undefined;
  constructor(private translocoService: TranslocoService) {
  }
  ngOnInit(): void {
    this.flagCode = {
      'en': 'en',
      'vi': 'vi'
    };
    this.activeLang = this.translocoService.getActiveLang();
    this.availableLangs = this.translocoService.getAvailableLangs();
  }
  trackByFn(index: number, item: any): any
  {
    return item.id || index;
  }

  changeLang(id: string) {
    console.log(id)
    this.translocoService.setActiveLang(id);
    this.activeLang = id;
  }
}
