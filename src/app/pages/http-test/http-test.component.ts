import { HttpMoviesService } from './../../services/http-movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {
  constructor(private http: HttpMoviesService) {}

  get() {
    //won't return anything, if we don't subscribe to it
    this.http.getMovies().subscribe();
  }

  post() {
    const movie: Movie ={
      country: "Poland",
      director: "ktoś tam",
      category: "fantasy",
      plot: "bestia z półnoy spaliła naszą wioskę",
      poster: null,
      year: "2001",
      title: "Wiedźmin",
      imdbRating: "10.0"
    }
    this.http.postMovie(movie).subscribe();
  }

  put() {}

  patch() {}

  delete() {}
}
