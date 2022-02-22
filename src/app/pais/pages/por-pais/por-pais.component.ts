import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [`
  li {
    cursor: pointer
  }
  `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugerido: Country[] = [];

  constructor(
    private paisService: PaisService
  ) { }

  buscar(termino: string){
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino)
    .subscribe( (paises) => {
      this.paises = paises;
      
        
      }, (err) => {
        this.hayError = true;
      })
  }

  sugerencias(termino: any){
    this.hayError = false;
    this.paisService.buscarPais(termino)
    .subscribe(paises => this.paisesSugerido = paises.splice(0,3) )
  }


}
