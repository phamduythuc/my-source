import {Component} from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  slideConfig = {
    autoplay: true,
    prevArrow: '<button type="button" style="background-color: #ca8a04" class="slick-prev">Previous</button>',
    nextArrow: '<button  type="button" style="background-color: #ca8a04" class="slick-next">Next</button>',
  };
  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"}
  ];

  slickInit($event: any) {
    console.log('slick initialized');
  }

  breakpoint($event: any) {
    console.log('breakpoint');
  }

  afterChange($event: any) {
    console.log('afterChange');
  }

  beforeChange($event: any) {
    console.log('beforeChange');
  }
}
