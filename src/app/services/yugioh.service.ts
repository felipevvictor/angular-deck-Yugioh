import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {CartaData} from '../models/pokemonData'

@Injectable({
  providedIn: 'root'
})
export class YugiohService {

  private baseURL:string = ""
  private cartaData:CartaData | any


  constructor(private http:HttpClient) {
    this.baseURL = environment.yugiAPI
  }

  getCarta(cartaName:string):Observable<CartaData>{
    this.cartaData = this.http.get<CartaData>(`${this.baseURL}${cartaName}`)
    return this.cartaData
  }
}
