import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from '../components/games/games.component';
import { ReviewsComponent } from '../components/reviews/reviews.component';
import { GameComponent } from '../components/gamePage/game/game.component';
import { GamesByPlatformComponent } from '../components/games-by-platform/games-by-platform.component';
import { HomeComponent } from '../components/home/home.component';
import { ReviewComponent } from '../components/review/review.component';
import {LoginComponent} from '../components/login/login.component';
import {SignupComponent} from '../components/signup/signup.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'games', component: GamesComponent },
  { path: 'games/:platformName', component: GamesByPlatformComponent },
  { path: 'game/:id', component: GameComponent },
  { path: 'game/:id/reviews', component: ReviewsComponent },
  { path: 'review/:id', component: ReviewComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
