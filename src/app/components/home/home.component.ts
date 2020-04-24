import { NavbarComponent } from './../navbar/navbar.component';
import { CardsComponent } from './../cards/cards.component';
import { MatSpinner } from '@angular/material/progress-spinner';
import { AppModule } from './../../app.module';
import { LoadingComponent } from './../shared/loading.component';
import { Component, OnInit, NgModule } from '@angular/core';
import { MoviedbService } from '../../api.service';
import { SharedModule } from './../../shared/shared.module';

// @NgModule({
//   imports: [
//     SharedModule,
//     MatSpinner,
//     CardsComponent,
//     NavbarComponent
//   ],
// })

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  newMovies: any[] = [];
  loading: boolean;

  constructor(private moviedb: MoviedbService) {

    this.loading = true;

    this.moviedb.getDiscoverMovies()
      .subscribe((data: any) => {

        console.log(data);
        this.newMovies = data;
        this.loading = false;
      });

  }


}
