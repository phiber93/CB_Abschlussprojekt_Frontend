import { NgModule } from '@angular/core';
import { provideRouter, RouterModule, Routes, withComponentInputBinding } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { ScoreboardComponent } from './scoreboard/scoreboard.component';
import { PlaygameComponent } from './playgame/playgame.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, title: "Monster Survivors" },
  { path: 'login', component: LoginComponent, title: "Login" },
  { path: 'register', component: RegisterComponent, title: "Register" },
  { path: 'profile', component: ProfileComponent, title: "Profile" },
  { path: 'admin', component: BoardAdminComponent, title: "Admin Board" },
  { path: 'scoreboard', component: ScoreboardComponent, title: "Scoreboard"},
  { path: 'playgame', component: PlaygameComponent, title: "Play the game"},
  { path: 'verify-email', component: VerifyEmailComponent, title: "Email verification"},
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    provideRouter(routes, withComponentInputBinding())
  ]
})
export class AppRoutingModule { }
