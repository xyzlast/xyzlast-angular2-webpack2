import {Injectable} from 'angular2/core';
import {HEROES} from './mock.heroes';
import * as _ from 'lodash';

@Injectable()
export class HeroService {
  constructor() {
    console.log(_.VERSION);
  }

  public getHeroes() {
    return Promise.resolve(HEROES);
  }

  public getHero(id) {
    return Promise.resolve(HEROES).then(
      heroes => _(heroes).find(hero => hero.id === id)
    );
  }
}
