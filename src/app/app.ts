/// <reference path="../../node_modules/angular2/typings/browser.d.ts" />

import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import { bootstrap } from 'angular2/platform/browser';
import { HTTP_PROVIDERS } from 'angular2/http';
import { enableProdMode } from 'angular2/core';
import { Component } from 'angular2/core';
import { provide } from 'angular2/core';
import { Router, RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, LocationStrategy, Location, HashLocationStrategy } from 'angular2/router';

import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent, HeroesRouterInfo } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';

@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent,
  },
  HeroesRouterInfo,
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
])
@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
class AppComponent {
  title: string;
  router: Router;
  location: Location;
  constructor(router: Router, location: Location) {
    this.title = 'This is Title';
    this.router = router;
    this.location = location;
  }
}

// enableProdMode();
bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  ROUTER_PROVIDERS,
  provide(LocationStrategy, { useClass: HashLocationStrategy }),
  HeroService
]).catch(err => console.error(err));
