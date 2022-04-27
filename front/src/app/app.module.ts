import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './LoginPage/loginpage.component';
import { HomePage } from './HomePage/homepage.component';
import { TopBar } from './TopBar/topbar.component';
import { Footer } from './Footer/footer.component';
import { MoviePage } from './MoviePage/moviepage.component';
import { MovieItem } from './MovieItem/movie-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPage,
    HomePage,
    TopBar,
    Footer,
    MoviePage,
    MovieItem,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HomePage },
      { path: 'login', component: LoginPage },
      { path: 'movie/:movieId', component: MoviePage}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
