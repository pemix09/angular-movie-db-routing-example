import { Movie } from './../models/movie';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';

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

  postMovie(movie: Movie){
    return this.http.post(this.url + '/movies', movie).pipe(tap(console.log));
  }

  putMovie(movie: Movie){
    return this.http.put(this.url + '/movies/' +movie.id, movie).pipe(tap(console.log));
  }

  patchMovie(movie: Partial<Movie>){
    return this.http.patch(this.url + '/movies/' +movie.id, movie).pipe(tap(console.log));
  }

  deleteMovie(id: string): Observable<[]>{
    return this.http.delete<[]>(this.url + '/movies/' + id).pipe(tap(console.log));
  }

  makeError(): Observable<HttpErrorResponse>{
    return this.http.delete(this.url + '/movies/' + 999).pipe(tap(console.log), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    console.error(
      `name: ${error.name} \n`+
      `Message: ${error.message} \n`+
      `returned code: ${error.status} \n`
    );
    return throwError('something bad happened');
    
  }
}
