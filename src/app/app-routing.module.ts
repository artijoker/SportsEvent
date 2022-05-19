import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ParticipantsTableComponent } from './participants-table/participants-table.component';
import { MatchesComponent } from './matches/matches.component';
import { TournamentPhotoComponent } from './tournament-photo/tournament-photo.component';

const routes: Routes = [
	{ path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'participants', component: ParticipantsTableComponent },
  { path: 'matches', component: MatchesComponent },
  { path: 'photo', component: TournamentPhotoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
