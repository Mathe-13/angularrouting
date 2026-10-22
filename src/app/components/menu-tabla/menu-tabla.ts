import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-tabla',
  standalone: false,
  styleUrl: './menu-tabla.css',
  templateUrl: './menu-tabla.html',
})
export class MenuTabla {
  public numeros!: Array<number>;

  constructor() {
    for (let i = 1; i <= 5; i++) {
      let random = Math.floor((Math.random() * 100) + 1);
      this.numeros.push(random)
    }
  }
}
