import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { CartService } from '../services/cart.service';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];

  colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eceda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

  constructor(
    //inject myservice!
    private dataService: DataService,
    private cartService: CartService,

    private http: HttpClient

    // private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
    .subscribe((response: any) => {
      // console.log(response);
      


      response.results.forEach( (result: any) => {
        this.dataService.getMoreData(result.name)
        .subscribe((uniqResponse: any) => {    //uniqResponse.. naming convention for forEach
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons);

        })
      })

      //.subscribe
      // 서버의 응답이 언제 도착하든지, 이 응답이 도착했을 때 subscribe가 서버에서 받은 응답을 콜백 함수로 전달. jquery의 res나 여기 response나 같은 거 ㅋㅋ



    });
  }

  addToCart(poke: any): void {
    this.cartService.addToCart(poke)
    window.alert('Your Pokemon has been added!')

  }
}
