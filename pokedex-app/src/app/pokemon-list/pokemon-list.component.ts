import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})

export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];

  searchForm = new FormGroup({
    pokeName: new FormControl(''),
  });


  constructor(
    private dataService: DataService,
    private cartService: CartService,
  ) { }


  ngOnInit(): void {
    this.dataService.getPokemons()
    .subscribe((response: any) => {
      // console.log(response);
      response.results.forEach( (result: any) => {
        this.dataService.getMoreData(result.name)
        .subscribe((uniqResponse: any) => {
          this.pokemons.push(uniqResponse);
          console.log(this.pokemons);
        })
      })
    });
  }


  addToCart(poke: any): void {
    this.cartService.addToCart(poke)
    window.alert('Your Pokemon has been added!')
  }

  
  searchWithPokeName() {
    this.pokemons = [];    
    // console.warn(this.searchForm.value.pokeName);
    this.dataService.getPokemons()
    .subscribe((response: any) => {    
      response.results.forEach( (result: any) => {        
        if(result.name == this.searchForm.value.pokeName){
          this.dataService.getMoreData(result.name)
          .subscribe((uniqResponse: any) => {
            this.pokemons.push(uniqResponse);
            console.log(this.pokemons);
          })
        }
      })
    });
  }


}
