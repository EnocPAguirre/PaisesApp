import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private _apiUrl: string = "https://restcountries.com/v2/";

  constructor() { }
}
