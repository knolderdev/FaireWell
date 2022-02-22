import { Component, OnInit } from '@angular/core';
import {AppConstants} from "../app-constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menu = AppConstants.menuLinks;
  messages = AppConstants.banners
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
