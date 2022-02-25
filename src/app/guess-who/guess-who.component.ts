import {Component, OnInit} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GuessWhoPopUpComponent} from "./guess-who-pop-up/guess-who-pop-up.component";

@Component({
  selector: 'app-guess-who',
  templateUrl: './guess-who.component.html',
  styleUrls: ['./guess-who.component.scss']
})
export class GuessWhoComponent implements OnInit {
  searchKey!: string;
  sliderOptions = {
    loop: false,
    margin: 10,
    nav: false,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
    }
  };
  messages = [
    {
      message: 'We will miss you. It was great working with you. You have right attitude and urge to learn. Wishing you very successful carrier ahead. ',
      useClass: 'bg-red-600',
      textClass: 'text-6xl text-white font-bold',
      person: 'Aamir',
      reveal: false,
      imageLink: "https://dailypost.files.wordpress.com/2015/04/turnpike-blur.jpg",
      personImage: "assets/images/aamir.jpg"
    },
    {
      message: 'Venky thank you so much for all your contribution in 3TL. Heartfelt congratulations for your new journey,  Do your best and have a successful life ahead.',
      useClass: 'bg-green-600',
      textClass: 'text-6xl font-bold',
      person: 'Soni-1',
      reveal: false,
      imageLink: "https://mobilesolutions.pt/wp-content/uploads/2016/02/Silver-Blur-Background-Wallpaper.jpg",
      personImage: "assets/images/soni.png"
    },
    {
      message: 'We will miss you Venky. Please deploy all your happiness in your life and always go ahead with strength. Stay in touch.',
      useClass: 'bg-green-600',
      textClass: 'text-6xl font-bold',
      person: 'Soni-2',
      reveal: false,
      imageLink: "https://mobilesolutions.pt/wp-content/uploads/2016/02/Silver-Blur-Background-Wallpaper.jpg",
      personImage: "assets/images/Soni1.jpeg"
    },
    {
      message: "It was nice working with you bro. Have a blasting career ahead. And remember bro, DEVIL is always with you. All the best and stay in touch!",
      useClass: 'bg-green-600',
      textClass: 'text-6xl text-white font-bold',
      person: 'Micky',
      reveal: false,
      imageLink: "https://www.kantar.com/-/media/project/kantar/global/articles/images/resized/br-blurring-boundaries.jpg",
      personImage: "assets/images/mickey.jpg"
    },
    {
      message: "It is finally time to say goodbye..  Venky you will be missed by whole team we will miss those funny Hindi conversation with you.Thank you for all those deployments.May god deploy lots of happiness in your life.The cup you gifted me will always make me remember about a good friend.Keep enjoying your life and make wonderful reals Knoldus' own Allu Arjun.\n" +
        "\n" +
        "Whenever you are facing any problem with Hindi or you are on a trip to North don't forget to call me.",
      useClass: "bg-green-600",
      textClass: 'text-4xl font-bold',
      person: "Kuki",
      reveal: false,
      imageLink: 'https://i.pinimg.com/474x/98/4c/4e/984c4e0369a2874cef897ac4757cef9c.jpg',
      personImage: "assets/images/kuki.jpg"
    },
    {
      message: "This is a whole new and exciting opportunity for you. We still cannot believe that you will be leaving us.I wish you all the success for the future and I know you will rock in that new position.",
      useClass: "bg-green-600",
      textClass: 'text-6xl text-white font-bold',
      person: "Poore",
      reveal: false,
      imageLink: "https://i.postimg.cc/0QcWtpNt/Get-Paid-Stock-com-62167c251d3b5.jpg",
      personImage: "assets/images/Poore.jpg"
    },
    {
      message: "You're a humble person. Stay same always and hope you've had the great life ahead. ",
      useClass: "bg-green-600",
      textClass: 'text-6xl text-white font-bold',
      person: "Anshu",
      reveal: false,
      imageLink: 'https://i.postimg.cc/155nhD3G/Get-Paid-Stock-com-62167ca52bdaa.jpg',
      personImage: "assets/images/Anshu.JPG"
    },
    {
      message: "Hi Venkatesh, Thank you for being with us. Working with you has been a privilege for us. May you continue to thrive in your professional and personal life. I wish new chapter of your life finds you alot of happiness, good health, success and wealth.",
      useClass: "bg-green-600",
      person: "Pappu",
      textClass: 'text-6xl text-white font-bold',
      reveal: false,
      imageLink: "https://dailypost.files.wordpress.com/2015/04/turnpike-blur.jpg",
      personImage: "assets/images/Pappu.jpg"
    },
    {
      message: "You are the Allu Arjun of our team.Because of you we tried to speak telugu.It was so great working with you, and you will be greatly missed.All the best for your future endeavours and keep making reels.",
      useClass: "bg-green-600",
      textClass: 'text-6xl font-bold',
      person: "Pooh",
      reveal: false,
      imageLink: "https://mobilesolutions.pt/wp-content/uploads/2016/02/Silver-Blur-Background-Wallpaper.jpg",
      personImage: "assets/images/Pooh.jpg"
    },
    {
      message: "We'll miss you Venky bro! and our hindi classes as well. You are awesome bro. Specially your dance. Keep it up! And all the best for your future!",
      useClass: "bg-green-600",
      textClass: 'text-6xl text-white font-bold',
      person: "Akshay",
      reveal: false,
      imageLink: "https://www.kantar.com/-/media/project/kantar/global/articles/images/resized/br-blurring-boundaries.jpg",
      personImage: "assets/images/Akshay.jpg"
    },
    {
      message: "Though, we didn't spent much time as a team. But yes, I must say Venky, you're an amazing and a cool guy. Your calmness, dedication, openness and craziness is appreciable. Wishing you a best of luck for your future endeavors.   ",
      useClass: "bg-green-600",
      textClass: 'text-6xl font-bold',
      person: "Magan",
      reveal: false,
      imageLink: 'https://i.pinimg.com/474x/98/4c/4e/984c4e0369a2874cef897ac4757cef9c.jpg',
      personImage: "assets/images/Magan.jpeg"
    },
    {
      message: "Hi Venky. It was amazing to have you in 3TL project. We are always happy to hear you. You are always so sweet and calmly replied our queries.Thanks for setting up my ssh key. I was so troubled with that and you resolved it. I have always been troubling you to deploy eop, add ssh key, give access blah blah.. But you always sweetly responded and helped with it. It was great to speak Telgu on your birthday. All the very best for your future. Always stay in touch.",
      useClass: "bg-green-600",
      textClass: 'text-4xl text-white font-bold',
      person: "Bittu",
      reveal: false,
      imageLink: "https://i.postimg.cc/0QcWtpNt/Get-Paid-Stock-com-62167c251d3b5.jpg",
      personImage: "assets/images/Bittu.jpeg"
    },
    {
      message: "Hello Venky, Thanks for your assistance and hard work. I wish you success in the future. Goodbye, and I hope you keep in touch ",
      useClass: "bg-green-600",
      textClass: 'text-6xl font-bold',
      person: "Abhi",
      reveal: false,
      imageLink: 'https://i.pinimg.com/474x/98/4c/4e/984c4e0369a2874cef897ac4757cef9c.jpg',
      personImage: "assets/images/Abhinav.jpg"
    },
    {
      message: "Hi venky , It was a pleasure working with you and  Hope you keep doing your good work in your next job as well.Best of luck of your future.",
      useClass: "bg-green-600",
      textClass: 'text-4xl text-white font-bold',
      person: "Amit",
      reveal: false,
      imageLink: "https://i.postimg.cc/0QcWtpNt/Get-Paid-Stock-com-62167c251d3b5.jpg",
      personImage: "assets/images/Amit.jpg"
    },
    {
      message: "Hi Venky, It's really sad to know that this journey of you being with us is really small. I wish we could have spent more time together. We didn't had much time to work together but yes you are a very generous person and has a beautiful heart. Always stay in touch and all the very best for your future.",
      useClass: "bg-green-600",
      textClass: 'text-6xl font-bold',
      person: "Shruti",
      reveal: false,
      imageLink: 'https://i.pinimg.com/474x/98/4c/4e/984c4e0369a2874cef897ac4757cef9c.jpg',
      personImage: "assets/images/Shruti.jpg"
    },
    {
      message: "Hello Venkatesh, It was a very short but fabulous time with you. Keep deploying more and more videos on social media. Thank you for all those late time deployments and support. May god deploys all the success soon which is in building mode currently",
      useClass: "bg-green-600",
      textClass: 'text-4xl text-white font-bold',
      person: "Suraj",
      reveal: false,
      imageLink: "https://i.postimg.cc/0QcWtpNt/Get-Paid-Stock-com-62167c251d3b5.jpg",
      personImage: "assets/images/Suraj.jpg"
    }
  ];

  constructor(private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.checkLocalStorageAvailable();
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
        if(data != undefined){
          this.messages.forEach((message) => {
            if (message.person === this.searchKey) {
              if (data.result === 'clicked') {
                console.log('The result is ', data.result);
                console.log('Message is', message);
                message.reveal = true;
              }
            }
          });
          if(this.searchKey === 'Suraj' && data.result === 'clicked'){
            localStorage.removeItem('messages');
            localStorage.setItem('messages', JSON.stringify(this.messages));
            setTimeout(()=>{
              this.checkLocalStorageAvailable();
            }, 2000);
          }
        }
      }
    );
  }

  checkLocalStorageAvailable() {
    if (localStorage.getItem('messages')) {
      this.messages = JSON.parse(<string>localStorage.getItem('messages'));
    } else {
      console.log('Not available ');
    }
  }
}
