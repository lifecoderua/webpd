export class Render {
  // map = []
  target = document.getElementById('render-target')

  render(map) {
    this.target.innerHTML = ''

    map.map.map( (row) => this.target.innerHTML += `${row.join('')}<br>` )
  }
}