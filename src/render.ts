export class Render {
  // map = []
  target = document.getElementById('render-target')

  render(map) {
    this.target.innerHTML = ''

    map.combinedMap.map( (row) => this.target.innerHTML += `${row.join('')}<br>` )
  }
}