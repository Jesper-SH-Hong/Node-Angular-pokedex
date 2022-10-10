import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    
    private http: HttpClient
  ) { }


  //now I can send HTTP RQ!

  //angular의 http client 내장 함수 get()
  getIndividualPokemon() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
  }


}
