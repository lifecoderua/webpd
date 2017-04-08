import { Extra } from './extra'
import { Render } from './render'
import { Map } from './map'

function run() {
  var map = new Map()
  console.log(`map: ${map}`)
  console.log((new Extra()).cool())
}

run()