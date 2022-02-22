import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GuessWhoPopUpComponent} from "./guess-who-pop-up/guess-who-pop-up.component";
import {AppConstants} from "../app-constants";

@Component({
  selector: 'app-guess-who',
  templateUrl: './guess-who.component.html',
  styleUrls: ['./guess-who.component.scss']
})
export class GuessWhoComponent implements OnInit {
  searchKey!: string;
  sliderOptions = {
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    responsive:{
      0:{
        items:1
      },
    }
  };
  messages = [
    {
      message: 'Please merge',
      useClass: 'bg-red-600',
      person: 'Soni',
      reveal: false
    },
    {
      message: 'Please deploy',
      useClass: 'bg-green-600',
      person: 'Poore',
      reveal: false
    }
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  open(name: string) {
    this.searchKey = name;
    const dialogRef = this.dialog.open(GuessWhoPopUpComponent, {
      panelClass: 'popup-modal',
      autoFocus: false,
      data: this.searchKey
    });
    dialogRef.afterClosed().subscribe(
      data => {
        console.log("Dialog output:", data);
        if (data) {
          this.messages.forEach((message) => {
            if (message.person === data.person) {
              message.reveal = true;
            }
          })
        } else {
          this.messages.forEach((message) => {
            if (message.person === data.person) {
              message.reveal = false;
            }
          })
        }
      }
    );
  }
}
