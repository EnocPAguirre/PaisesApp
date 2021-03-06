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

  regiones: string[] = ['EU','EFTA','CARICOM','PA','AU','USAN','EEU','AL','ASEAN','CAIS','CEFTA','NAFTA','SAARC',]
  regionActive: string = '';

  constructor() { }

  getClaseCSS(region: string): string {
    return (region === this.regionActive)
            ? 'btn btn-primary'
            : 'btn btn-outline-primary'
  }

  activarRegion(region : string){
    this.regionActive = region;

}
}