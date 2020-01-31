import { Component, OnInit } from '@angular/core';
declare var $: any
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel()
    setInterval(() => {
      $('.carousel').carousel('next', 1)
    }, 5000)
    $('.carousel.carousel-slider').carousel({
      indicators: true
    });
          
  }

}
