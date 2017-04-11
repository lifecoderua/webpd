import * as _ from 'lodash'
import { MapObject } from './map-object'

export class Potion extends MapObject {
  color = _.sample( ['red', 'green', 'blue'] )
  tile = '&'
}