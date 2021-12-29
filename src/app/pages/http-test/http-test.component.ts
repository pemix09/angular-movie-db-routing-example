import { HttpMoviesService } from './../../services/http-movies.service';
import { Component, OnInit } from '@angular/core';

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

  post() {}

  put() {}

  patch() {}

  delete() {}
}
