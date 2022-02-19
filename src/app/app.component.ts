import {Component, OnInit} from '@angular/core';
import {NgxHowlerService} from "ngx-howler";
import {Router} from "@angular/router";
// import {Howl, Howler} from 'howler';
// import {Howl, Howe}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private ngxHowlerService: NgxHowlerService,
              private router: Router) {
    ngxHowlerService.loadScript('https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.0/howler.min.js');
  }
  title = 'FairWellApp';
  hideButton = true;
  ngOnInit() {
    this.ngxHowlerService.register('dev', {
      src: ['assets/music/background_music.mp3'],
      html5: true
    }).subscribe(status => {
      console.log('status', status);
    });
  }

  start(){
    this.router.navigate(['/home']);
    this.hideButton = false;
    // this.play();
  }

  play() {
    this.ngxHowlerService.get('dev').play();
  }
}
