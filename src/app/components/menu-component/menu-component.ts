import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-component',
  standalone: false,
  styleUrl: './menu-component.css',
  templateUrl: './menu-component.html',
})
export class MenuComponent {
  //EJEMPLOS, ESTE SE HA USADO EN component: numero-doble.components.ts
  //cosntructor(private _router: Router) {}
  //goToHome() {this._router.navigae("['/rutaparametros']", param1, param2);}
}
