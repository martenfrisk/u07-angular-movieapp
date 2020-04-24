import { SharedModule } from './shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MoviedbService } from './api.service';
import { Component, NgModule } from '@angular/core';

// @NgModule({
//   declarations: [
//     NavbarComponent,
//   ],
//   imports: [
//     NavbarComponent,
//    ]
// })

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent {
  title = 'movie-app';

  constructor(public ms: MoviedbService) {
    this.ms.getDiscoverMovies().subscribe(data => console.log(data));
  }
}
