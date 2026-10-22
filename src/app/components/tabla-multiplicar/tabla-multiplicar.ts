import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-tabla-multiplicar',
  standalone: false,
  styleUrl: './tabla-multiplicar.css',
  templateUrl: './tabla-multiplicar.html',
})
export class TablaMultiplicar implements OnInit {
  public numeros!: Array<number>;

  constructor(private _activeRouter: ActivatedRoute,
    private _cdr: ChangeDetectorRef
  ) {
    this.numeros = [];
  }

  ngOnInit(): void {

    this._activeRouter.params.subscribe((params: Params) => {

      let numero = parseInt(params["valor"]);

      let aux = [];

      for (let i = 1; i <= 10; i++) {

        let op = numero * i;

        aux.push(op);

      }

      this.numeros = aux;

      this._cdr.detectChanges();

    })

  }

}



