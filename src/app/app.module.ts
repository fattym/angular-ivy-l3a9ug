import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PagenotefoundComponent } from './pagenotefound/pagenotefound.component';
import { AlertService } from './alert.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,RouterModule.forRoot([
    {path:'',component:NavbarComponent},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'**',component:PagenotefoundComponent}
  ])],
  declarations: [ AppComponent, HelloComponent, NavbarComponent, HomeComponent, AboutComponent, PagenotefoundComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AlertService]
})
export class AppModule { }
