import { Extra } from './extra'
import { Render } from './render'
import { Map } from './map'


declare module "*!text" {
  const content: string;
  export default content;
}
import html from '../index.html!text'
// require('copy!../index.html')


var map
var render

function run() {
  map = new Map()
  render = new Render()
  render.render(map)
  document.onkeyup = onKeypress;
  console.log(`map: ${map}`)
  console.log((new Extra()).cool())
}

function onKeypress(e) {
  map.move(e.keyCode)
  render.render(map)
}

run()