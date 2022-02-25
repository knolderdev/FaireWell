import {Injectable} from "@angular/core";

@Injectable()
export class AppConstants {
  public static readonly messages = [
    {
      message: 'We will miss you. It was great working with you. You have right attitude and urge to learn. Wishing you very successful carrier ahead. ',
      useClass: 'bg-red-600',
      person: 'Aamir'
    },
    {
      message: 'Venky thank you so much for all your contribution in 3TL. Heartfelt congratulations for your new journey,  Do your best and have a successful life ahead.',
      useClass: 'bg-green-600',
      person: 'Soni'
    },
    {
      message: "It was nice working with you bro. Have a blasting career ahead. And remember bro, DEVIL is always with you. All the best and stay in touch!",
      useClass: 'bg-green-600',
      person: 'Micky'
    },
    {
      message: "It is finally time to say goodbye..  Venky you will be missed by whole team we will miss those funny Hindi conversation with you.Thank you for all those deployments.May god deploy lots of happiness in your life.The cup you gifted me will always make me remember about a good friend.Keep enjoying your life and make wonderful reals Knoldus' own Allu Arjun.\n" +
        "\n" +
        "Whenever you are facing any problem with Hindi or you are on a trip to North don't forget to call me.",
      useClass: "bg-green-600",
      person: "kuki"
    },
    {
      message: "This is a whole new and exciting opportunity for you. We still cannot believe that you will be leaving us.I wish you all the success for the future and I know you will rock in that new position.",
      useClass: "bg-green-600",
      person: "Poore"
    },
    {
      message: "You're a humble person. Stay same always and hope you've had the great life ahead. ",
      useClass: "bg-green-600",
      person: "Anshu"
    },
    {
      message: "Hi Venkatesh, Thank you for being with us. Working with you has been a privilege for us. May you continue to thrive in your professional and personal life. I wish new chapter of your life finds you alot of happiness, good health, success and wealth.",
      useClass: "bg-green-600",
      person: "Pappu"
    },
    {
      message: "You are the Allu Arjun of our team.Because of you we tried to speak telugu.It was so great working with you, and you will be greatly missed.All the best for your future endeavours and keep making reels.",
      useClass: "bg-green-600",
      person: "Pooh"
    },
    {
      message: "We'll miss you Venky bro! and our hindi classes as well. You are awesome bro. Specially your dance. Keep it up! And all the best for your future!",
      useClass: "bg-green-600",
      person: "Akshay"
    },
    {
      message: "Though, we didn't spent much time as a team. But yes, I must say Venky, you're an amazing and a cool guy. Your calmness, dedication, openness and craziness is appreciable. Wishing you a best of luck for your future endeavors.   ",
      useClass: "bg-green-600",
      person: "Pappu"
    },
    {
      message: "Hi Venky. It was amazing to have you in 3TL project. We are always happy to hear you. You are always so sweet and calmly replied our queries.Thanks for setting up my ssh key. I was so troubled with that and you resolved it. I have always been troubling you to deploy eop, add ssh key, give access blah blah.. But you always sweetly responded and helped with it. It was great to speak Telgu on your birthday. All the very best for your future. Always stay in touch.",
      useClass: "bg-green-600",
      person: "Bittu"
    },

  ]

  public static readonly banners = [
    {
      link: "https://t4.ftcdn.net/jpg/02/61/01/77/360_F_261017702_dQTJU5zXzAT5IBUevKEf7Z3b9T2Oddh6.jpg",
      alt: "First Banner"
    },
    {
      link: "https://i.postimg.cc/x8213t4X/grapes-Fad.png",
      alt: "second Banner"
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
    }
  ]

  public static readonly names = [
    'Poore',
    'Soni-1',
    'Soni-2',
    'Suraj',
    'Aamir',
    'Pooh',
    'Anshu',
    'Micky',
    'Shruti',
    'Bittu',
    'Akshay',
    'Kuki',
    'Amit',
    'Magan',
    'Pappu',
    'Abhi'
  ]
}
