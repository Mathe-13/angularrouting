import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
//ESTAS DOS LIBRERIAS PARA LOS PARAMETROS
@Component({
  selector: 'app-numero-doble-component',
  standalone: false,
  styleUrl: './numero-doble-component.css',
  templateUrl: './numero-doble-component.html',
})
export class NumeroDobleComponent implements OnInit {
  public doble!: number;
  public numero!: number;

  //RECIBIMOS EL OBJETO INYECTADO DE LAS RUTAS
  constructor(private _activeRoute: ActivatedRoute,
    private _router: Router //AÑADIDO 
  ) {
    this.doble = 0;
  }

  redirect(num: number): void {
    this._router.navigate(["/doble", num]);
  }

  goToHome(): void {
    this._router.navigate(["/"]);
  }

  ngOnInit(): void {
    //AQUI NOS SUBCRIBIMOS A LA RECUPERACION DEL PARAMETRO
    this._activeRoute.params.subscribe((parametros: Params) => {
      //DENTRO DE PRAMS ES DONDE RECIBIMOS LOS PARAMETROS POR US :name
      //LA SINTAXIS ES parametros['parametername']
      //EL PARAMETRO ES OPCIONAL, POR LO QUE PREGUNTAMOS
      if (parametros['numero'] != null) {
        //PARAMETROS SIEMPRE SON string
        this.numero = parseInt(parametros['numero']);
        this.doble = this.numero * 2;
      }
    })
  }
}
