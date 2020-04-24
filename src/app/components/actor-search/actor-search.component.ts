import { MatInputModule } from '@angular/material/input';
import { MaterialModule } from './../../shared/material.module';
import { AppModule } from './../../app.module';
import { SharedModule } from './../../shared/shared.module';
import { LoadingComponent } from './../shared/loading.component';
import { MoviedbService } from '../../api.service';
import { Component, OnInit, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatLabel, MatFormFieldModule, MatFormField } from '@angular/material/form-field';

// @NgModule({
//   imports: [ MaterialModule ]
// })

// @NgModule({
//   imports: [
//     AppModule,
//     LoadingComponent,
//     SharedModule,
//     MatLabel,
//     MatFormFieldModule,
//     MatSpinner,
//     MatFormField,
//     MatInputModule,
//     ],
//   exports: [
//     LoadingComponent,
//     SharedModule,
//     MatLabel,
//     MatFormFieldModule,
//     MatSpinner,
//     MatFormField,
//     MatInputModule,
//     ],
// })

@Component({
  selector: 'app-actor-search',
  templateUrl: './actor-search.component.html',
  styleUrls: ['./actor-search.component.scss']
})
export class ActorSearchComponent {
  movies: any[] = [];
  actors: any[] = [];
  loading: boolean;
  constructor(private moviedb: MoviedbService) { }

  search(term: string) {
    console.log(term);

    this.loading = true;
    this.moviedb.getSearchActor(term).subscribe((data: any) => {
      console.log(data);

      this.actors = data;
      this.loading = false;
    });
  }
}
