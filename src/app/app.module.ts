import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage } from './LoginPage/loginpage.component';
import { HomePage } from './HomePage/homepage.component';
import { TopBar } from './TopBar/topbar.component';

@NgModule({

  declarations: [
    AppComponent,
    LoginPage,
    HomePage,
    TopBar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'login', component: LoginPage },
      { path: 'home', component: HomePage },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
