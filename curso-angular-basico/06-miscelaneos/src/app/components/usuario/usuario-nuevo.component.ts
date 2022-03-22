import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-usuario-nuevo',
  template: `
    <p>
      usuario-nuevo works!
    </p>
  `,
  styles: [
  ]
})
export class UsuarioNuevoComponent implements OnInit {

  constructor( private _activatedRoute:ActivatedRoute ) { 

    this._activatedRoute.parent.params.subscribe( parametros =>{
      console.log( "Ruta Hija Usuario Nuevo" );
      console.log( parametros );
    });

  }

  ngOnInit(): void {  }

}
