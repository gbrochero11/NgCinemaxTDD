import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss']
})
export class SlidesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.slider').slider();
  }

}
