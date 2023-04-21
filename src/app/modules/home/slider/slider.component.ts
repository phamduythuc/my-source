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
    {img: "./assets/image/slide/4f9d4123-43ee-4f2a-b5ef-1f2ac22962f3.jpg"},
    {img: "./assets/image/slide/5387d960-4af6-482a-a6a7-2c2f1349814b.jpg"},
    {img: "./assets/image/slide/4f9d4123-43ee-4f2a-b5ef-1f2ac22962f3.jpg"},
    {img: "./assets/image/slide/5387d960-4af6-482a-a6a7-2c2f1349814b.jpg"}
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
