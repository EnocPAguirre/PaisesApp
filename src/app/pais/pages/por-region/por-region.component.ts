import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px
    }
    `
  ]
})
export class PorRegionComponent  {

  regiones: string[] = ['Africa', 'Oceania', 'Europe', 'Americas', 'Asia']
  regionActive: string = '';

  constructor() { }

  activarRegion(region : string){
    this.regionActive = region;
  }

}
