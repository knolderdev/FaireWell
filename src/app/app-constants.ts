import {Injectable} from "@angular/core";

@Injectable()
export class AppConstants {
  public static readonly messages = [
    {
      person: 'Please deploy',
      useClass: 'bg-red-600'
    },
    {
      person: 'Please deploy',
      useClass: 'bg-green-600'
    }
  ]
}
