export class MapObject {
  isPassable: false
  isInteractive: false
  tile = '#'

  // position: {
  //   x: number,
  //   y: number
  // }
  
  constructor(public x: number, public y: number) {
  }
}