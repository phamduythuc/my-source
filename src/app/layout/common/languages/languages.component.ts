import { Component } from '@angular/core';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  flagCode: any;
  langs = [
    {id: 'en', label: 'English'},
    {id: 'vi', label: 'Việt Nam'}
  ]
activeLang = 'vi'
  ngOnInit(): void {
    this.flagCode = {
      'en': 'en',
      'vi': 'vi'
    };
  }
  trackByFn(index: number, item: any): any
  {
    return item.id || index;
  }
}
