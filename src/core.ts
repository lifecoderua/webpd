import { Extra } from './extra'
import { Render } from './render'
import { Map } from './map'

function run() {
  let map = new Map()
  let render = new Render()
  render.render(map)
  console.log(`map: ${map}`)
  console.log((new Extra()).cool())
}

run()