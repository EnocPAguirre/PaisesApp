import { Component, EventEmitter, Output, OnInit} from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string>= new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); 

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  buscar(){
    this.onEnter.emit(this.termino);
  }

  
  ngOnInit() {
    this.debouncer.subscribe(valor => {
      console.log('debouncer', valor);
    });
  }
  
  teclaPresionada(event: any){
    const valor = event.target.value;
    console.log(valor)
    console.log(this.termino);

  }

}
