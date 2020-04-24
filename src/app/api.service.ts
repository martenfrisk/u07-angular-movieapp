import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Injectable, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { map } from 'rxjs/operators';

@NgModule({
  imports: [
    HttpClientModule
  ]
})

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private apikey = '577b21df4922e5d843db5618186da1a6';
  private urlMoviedb: 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.themoviedb.org/3${query}&api_key=${
      this.apikey
      }&language=en-US&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }

  getQueryforMovie(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${
      this.apikey
      }&language=en-US&callback=JSONP_CALLBACK`;

    return this.http.jsonp(url, '');
  }
  getQueryforActor(query: string) {
    const url = `https://api.themoviedb.org/3${query}?api_key=${
      this.apikey
      }&language=en-US&callback=JSONP_CALLBACK&append_to_response=movie_credits`;

    return this.http.jsonp(url, '');
  }

  // getDiscoverMovies() {
  //   return this.getQuery('/discover/movie?sort_by=popularity.desc').pipe(
  //     map((data: any) => data.results)
  //   );
  // }

  getSearchMovies(query: string) {
    return this.getQuery(
      `/search/movie?query=${query}&sort_by=popularity.desc`
    ).pipe(map((data: any) => data.results));
  }
  getSearchActor(query: string) {
    return this.getQuery(
      `/search/person?query=${query}&sort_by=popularity.desc&append_to_response=movie_credits`
    ).pipe(map((data: any) => data.results));
  }

  getMovie(id: string) {
    return this.getQueryforMovie(`/movie/${id}`).pipe(
      map((data: any) => data)
    );
  }

  getActor(id: string) {
    return this.getQueryforActor(`/person/${id}`).pipe(
      map((data: any) => data)
    );
  }

  getDiscoverMovies() {
  const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=en-US&callback=JSONP_CALLBACK`;
  return this.http.jsonp(url, '').pipe(map((res: any) => res.results));
  }
}
