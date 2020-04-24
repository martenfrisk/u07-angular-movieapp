import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'moviePoster'
})
export class MoviePosterPipe implements PipeTransform {

  transform(query: any): any {

    const url = 'http://image.tmdb.org/t/p/w400';

    if (query.poster_path) {
      return url + query.poster_path;
    } else if (query.profile_path) {
      return url + query.profile_path;
    } else {
      if (query.backdrop_path) {
        return url + query.backdrop_path;
      } else {
        return 'assets/img/no-poster.png';
      }
    }
  }

}
