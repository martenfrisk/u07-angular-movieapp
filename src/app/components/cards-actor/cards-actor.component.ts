import { MatCardModule } from '@angular/material/card';
import { Component, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from './../../app.module';
import { MoviePosterPipe } from './../../pipe/movie-poster.pipe';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
  imports: [
    MoviePosterPipe,
    MatCardModule
  ]
})

@Component({
  selector: 'app-cards-actor',
  templateUrl: './cards-actor.component.html',
  styleUrls: ['./cards-actor.component.scss'],
})
export class CardsActorComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  goToActor(item: any) {

    let movieId: any;

    movieId = item.id;

    this.router.navigate(['/person', movieId]);
  }

}
