import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError} from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = "https://restcountries.com/v2/";

  constructor(
    private http: HttpClient
  ) { }

  buscarPais(termino: string) : Observable<Country[]>{
    return this.http.get<Country[]>(`${this._apiUrl}/name/${termino}`)
  }

  buscarCapital(termino: string): Observable<Country[]>{
    const url = `${this._apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url);

  }

}
