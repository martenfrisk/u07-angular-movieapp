import { MatInputModule } from '@angular/material/input';
import { LoadingComponent } from './../shared/loading.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MoviedbService } from './../../api.service';
import { Component, OnInit } from '@angular/core';
import { AppModule } from './../../app.module';
import { SharedModule } from './../../shared/shared.module';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss']
})
export class MovieSearchComponent {
  movies: any[] = [];
  actors: any[] = [];
  loading: boolean;
  constructor(private moviedb: MoviedbService) { }

  search(term: string) {
    console.log(term);

    this.loading = true;
    this.moviedb.getSearchMovies(term).subscribe((data: any) => {
      console.log(data);

      this.movies = data;
      this.loading = false;
    });
    this.moviedb.getSearchActor(term).subscribe((data: any) => {
      console.log(data);

      this.actors = data;
      this.loading = false;
    });
  }
}
