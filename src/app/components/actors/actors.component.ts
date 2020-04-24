import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviedbService } from '../../api.service';
import { Router } from '@angular/router';
import { AppModule } from './../../app.module';
import { SharedModule } from './../../shared/shared.module';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.sass']
})
export class ActorsComponent {

  actor: any = {};

  loadingMovies: boolean;

  constructor(private router: ActivatedRoute,
              private moviedb: MoviedbService) {

    this.loadingMovies = true;

    this.router.params.subscribe(params => {
      console.log(params);

      this.moviedb.getActor(params.id)
        .subscribe(actor => {
          console.log(actor);
          this.actor = actor;
          this.loadingMovies = false;
        });
    });

  }

}
