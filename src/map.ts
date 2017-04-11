import * as _ from 'lodash'
import { Potion } from './potion'
import { Hero } from './hero'

export class Map {
  static readonly x = 10
  static readonly y = 8

  map = []
  hero: Hero
  // heroPoint = {
  //   x: 0,
  //   y: 0
  // }

  static readonly tiles = ['#', '.', '$'] 
  mapObjects = []

  constructor() {
    for (var i=0; i<Map.y; i++) {
      this.map[i] = []
      for (var j=0; j<Map.x; j++) {
        this.map[i][j] = Map.tiles[0]        
      }
    }
    this.hero = new Hero(1, 1)
    this.mapObjects.push( new Potion(1, 2) )
    this.mapObjects.push( new Potion(1, 3) )    
    this.mapObjects.push( new Potion(1, 4) )    
  }

  get combinedMap() {
    let combined = _.cloneDeep(this.map)
    this.mapObjects.forEach( (obj) => combined[obj.y][obj.x] = obj.tile )

    combined[this.hero.y][this.hero.x] = this.hero.tile
    return combined
  }

  move(keyCode) {
    switch (keyCode) {
      case 37: this.hero.x--; break;
      case 38: this.hero.y--; break;
      case 39: this.hero.x++; break;
      case 40: this.hero.y++; break;
      case 53: /** 5 **/ break;
    }
  }
}