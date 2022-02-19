import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgxHowlerService} from "ngx-howler";
import { GuessWhoComponent } from './guess-who/guess-who.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GuessWhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule
  ],
  providers: [NgxHowlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
