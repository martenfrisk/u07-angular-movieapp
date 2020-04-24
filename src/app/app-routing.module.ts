import { ActorsComponent } from './components/actors/actors.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { ActorSearchComponent } from './components/actor-search/actor-search.component';
import { MoviesComponent } from './components/movies/movies.component';
import { HomeComponent } from './components/home/home.component';
import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search-movie', component: MovieSearchComponent },
  { path: 'search-actor', component: ActorSearchComponent },
  { path: 'movie/:id', component: MoviesComponent },
  { path: 'person/:id', component: ActorsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '/', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
];
