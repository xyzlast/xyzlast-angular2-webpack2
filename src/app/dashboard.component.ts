import { Component } from 'angular2/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];

  constructor(
    private _router: Router,
    private _heroService:HeroService) {

  }

  ngOnInit() {
    this._heroService.getHeroes().then(heroes => {
      this.heroes = heroes;
    });
  }

  gotoDetail(hero:Hero) {
    let link = ['HeroDetail', { id: hero.id }];
    this._router.navigate(link);
  }
}
