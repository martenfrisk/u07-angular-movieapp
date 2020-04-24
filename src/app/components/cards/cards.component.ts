import { MatCardModule, MatCard, MatCardContent } from '@angular/material/card';
import { MoviePosterPipe } from './../../pipe/movie-poster.pipe';
import { Component, Input, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from './../../app.module';
import { SharedModule } from './../../shared/shared.module';


@NgModule({
  imports: [
    MoviePosterPipe,
    MatCardModule,
    MatCard,
    MatCardContent
  ]
})

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() items: any[] = [];

  constructor(private router: Router) { }

  goToMovie(item: any) {

    let movieId: any;

    movieId = item.id;

    this.router.navigate(['/movie', movieId]);
  }

}
