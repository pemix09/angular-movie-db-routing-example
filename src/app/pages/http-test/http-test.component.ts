import { HttpErrorResponse } from '@angular/common/http';
import { HttpMoviesService } from './../../services/http-movies.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/models/movie';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-http-test',
  templateUrl: './http-test.component.html',
  styleUrls: ['./http-test.component.css'],
})
export class HttpTestComponent {

  errorMessage: string;

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

  put() {
    const movie: Movie ={
      id: "54",
      country: "Poland",
      director: "ktoś tam",
      category: "fantasy",
      plot: "bestia z półnoy spaliła naszą wioskę",
      poster: null,
      year: "2001",
      title: "Wiedźmin 2",
      imdbRating: "10.0"
    }
    this.http.putMovie(movie).subscribe();
  }

  patch() {
    const movie: Partial<Movie> ={
      id: "54",
      plot: "bestia z półnoy spaliła naszą wioskę i chuj"
    }
    this.http.patchMovie(movie).subscribe();
  }

  delete() {
    this.http.deleteMovie("54").subscribe();
  }

  error(){
    this.http.makeError().subscribe({error: (err: string) => this.errorMessage = err});
  }

 
}
