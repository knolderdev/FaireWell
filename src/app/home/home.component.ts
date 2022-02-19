import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  sliderOptions = {
    items: 1,
    margin: 0,
    autoHeight: true,
    autoWidth: true,
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    speed: 50,
    navSpeed: 100,
    responsive: {
      0: {
        items: 1
      },
    }
  };
  constructor() { }

  ngOnInit(): void {
  }

}
