import { Component } from '@angular/core';
import { movies } from '../models';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomePage {
  movies = movies;
}
