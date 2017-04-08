import * as _ from 'lodash'

export class Map {
  static readonly x = 10
  static readonly y = 8

  map = []
  heroPoint = {
    x: 0,
    y: 0
  }

  static readonly tiles = ['#', '.', '$'] 

  constructor() {
    for (var i=0; i<Map.y; i++) {
      this.map[i] = []
      for (var j=0; j<Map.x; j++) {
        this.map[i][j] = Map.tiles[0]
      }
    }
  }

  get combinedMap() {
    let combined = _.cloneDeep(this.map)
    combined[this.heroPoint.y][this.heroPoint.x] = '@'
    return combined
  }

  move(keyCode) {
    switch (keyCode) {
      case 37: this.heroPoint.x--; break;
      case 38: this.heroPoint.y--; break;
      case 39: this.heroPoint.x++; break;
      case 40: this.heroPoint.y++; break;
      case 53: /** 5 **/ break;
    }
  }
}