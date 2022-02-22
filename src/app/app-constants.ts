import {Injectable} from "@angular/core";

@Injectable()
export class AppConstants {
  public static readonly messages = [
    {
      message: 'Please merge',
      useClass: 'bg-red-600',
      person: 'Soni'
    },
    {
      message: 'Please deploy',
      useClass: 'bg-green-600',
      person: 'Poore'
    }
  ]

  public static readonly banners = [
    {
      link: "https://t4.ftcdn.net/jpg/02/61/01/77/360_F_261017702_dQTJU5zXzAT5IBUevKEf7Z3b9T2Oddh6.jpg",
      alt: "First Banner"
    },
    {
      link: "https://i5.walmartimages.com/asr/301921a3-094e-419b-945a-2fedeb8cbba6.f306c45cab0bdb241c0478abcbc63663.jpeg",
      alt: "Third Banner"
    }
  ]

  public static readonly menuLinks = [
    {
      title: 'Home',
      where: '/home'
    },
    {
      title: 'Guess Who',
      where: '/guessWho'
    },
    {
      title: 'Your memories',
      where: '/video'
    },
    {
      title: 'Secrets',
      where: '/secret'
    }
  ]

  public static readonly names = [
    'Poore',
    'Soni',
    'Suraj'
  ]
}
