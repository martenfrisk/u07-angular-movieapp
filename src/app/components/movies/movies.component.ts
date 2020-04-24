import { MoviePosterPipe } from './../../pipe/movie-poster.pipe';
import { AppModule } from './../../app.module';
import { SharedModule } from './../../shared/shared.module';
import { LoadingComponent } from './../shared/loading.component';
import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviedbService } from '../../api.service';

// @NgModule({
//   imports: [ SharedModule, MoviePosterPipe ]
// })

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.sass']
})
export class MoviesComponent {

  movie: any = {};

  loadingMovies: boolean;

  constructor(private router: ActivatedRoute,
              private moviedb: MoviedbService) {

    this.loadingMovies = true;

    this.router.params.subscribe(params => {
      console.log(params);

      this.moviedb.getMovie(params.id)
        .subscribe(movie => {
          console.log(movie);
          this.movie = movie;
          this.loadingMovies = false;
        });
    });

  }

}
