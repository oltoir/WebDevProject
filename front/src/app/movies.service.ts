import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthToken, Movie} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000/api/v1'
  constructor(private http: HttpClient) { }

  login(username:string,password:string): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}/login/`,{
      username,
      password
    });
  }

  getMovies(): Observable<Movie[]>{
    return this.http.get<Movies[]>(`${this.BASE_URL}/movies`);
  }
  getMovieDetail(movie_id:number): Observable<Movie>{
    return this.http.get<Movie>(`${this.BASE_URL}/movies/${movie_id}`)
  }
}
