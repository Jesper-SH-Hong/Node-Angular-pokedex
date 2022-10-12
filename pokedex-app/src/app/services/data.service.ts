import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService { 

  constructor(    
    //name: http, type: HttpClient
    private http: HttpClient
  ) { }

  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
  }


  getMoreData(pokeName: string) {
    //pass the pokeName get dynamically from component using Ecmascript Template literals(placeholder)
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  }


}
