import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {GuessWhoComponent} from "./guess-who/guess-who.component";
import {MemoriesComponent} from "./memories/memories.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'guessWho',
    component: GuessWhoComponent
  },
  {
    path: 'video',
    component: MemoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
