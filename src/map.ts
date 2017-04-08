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
    for (var i=0; i<Map.x; i++) {
      this.map[i] = []
      for (var j=0; j<Map.y; j++) {
        this.map[i][j] = Map.tiles[0]
      }
    }
  }
}