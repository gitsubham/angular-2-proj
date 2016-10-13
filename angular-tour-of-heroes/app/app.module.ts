import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule }    from '@angular/http'
import './rxjs-extensions';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';
import { InMemoryDataService }  from './in-memory-data.service';

import  { AppComponent } from './app.component';
import  { HeroSearchComponent } from './hero-search.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from './heroes.component';
import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';


@NgModule({
  imports:  [ BrowserModule, FormsModule, AppRoutingModule,
              HttpModule,
              InMemoryWebApiModule.forRoot(InMemoryDataService)],
  declarations: [ AppComponent,  HeroesComponent,
                  DashboardComponent, HeroDetailComponent,
                  HeroSearchComponent ],
  bootstrap :   [ AppComponent ],
  providers : [ HeroService ]
})

export class AppModule { }

