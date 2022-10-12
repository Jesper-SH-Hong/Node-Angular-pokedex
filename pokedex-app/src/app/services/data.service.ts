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


  //now I can send HTTP RQ!

  //angular's http client method get()
  getPokemons() {
    return this.http.get(`https://pokeapi.co/api/v2/pokemon?limit=50`);
  }


  //Get more poke data
  getMoreData(pokeName: string) {
    //$ecmascript placeholder.  pass the name(여기 arg) get dynamically from component
    return this.http.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`);
  }


}
