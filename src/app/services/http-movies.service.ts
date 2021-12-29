import { Movie } from './../models/movie';
import { Observable } from 'rxjs';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpMoviesService {

  private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { 
  }

  // getMovies(): Observable<Movie[]>{
  //   //return observable
  //   return this.http.get<Movie[]>(this.url + '/movies')
  //     .pipe(tap(console.log));
  // }
  getMovies(): Observable<HttpResponse<Movie[]>>{
    //return observable
    return this.http.get<HttpResponse<Movie[]>>(this.url + '/movies',{observe: 'response'})
      .pipe(tap(console.log));
  }
}
