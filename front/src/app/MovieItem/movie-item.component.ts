import { Component, Input } from '@angular/core';
import { Movie,movies } from '../models';


@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItem {
    movies = movies;
    @Input() movie!: Movie;

}
