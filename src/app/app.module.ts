import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule, MatCardTitle } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { ActorSearchComponent } from './components/actor-search/actor-search.component';
import { ActorsComponent } from './components/actors/actors.component';
import { CardsActorComponent } from './components/cards-actor/cards-actor.component';
import { CardsComponent } from './components/cards/cards.component';
import { HomeComponent } from './components/home/home.component';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoadingComponent } from './components/shared/loading.component';
import { PipemoduleModule } from './pipe/pipemodule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieSearchComponent,
    ActorSearchComponent,
    MoviesComponent,
    ActorsComponent,
    CardsComponent,
    CardsActorComponent,
    LoadingComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatMenuModule,
    PipemoduleModule,
    HttpClientJsonpModule,
    MatCardModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
