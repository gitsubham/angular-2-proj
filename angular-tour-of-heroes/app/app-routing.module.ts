import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';
import {  } from '@angular/';
import {  } from '@angular/';
import {  } from '@angular/';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';

const routes: Routes = [
    	{
      		path : '',
      		redirectTo : '/dashboard',
      		pathMatch : 'full'
      	},{
      		path : 'detail/:id',
      		component : HeroDetailComponent
      	},{
            path : 'heroes',
            component : HeroesComponent
        },{
        	path : 'dashboard',
        	component : DashboardComponent
        }
];

@NgModule({
    imports : [ RouterModule.forRoot(routes) ],
    exports : [ RouterModule ]
})

export class AppRoutingModule {}