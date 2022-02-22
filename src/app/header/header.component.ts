import {Component, HostListener, Input} from '@angular/core';
import {AppConstants} from "../app-constants";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menu = AppConstants.menuLinks;
  @Input() temp!: string;
  hamburger = false;
  scrWidth:any;

  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.scrWidth = window.innerWidth;
    if(this.scrWidth > 1024){
      this.hamburger = false;
    }
  }

  // Constructor
  constructor() {
    this.getScreenSize();
  }

  toggleHamburger(){
    this.hamburger = !this.hamburger;
  }
}
