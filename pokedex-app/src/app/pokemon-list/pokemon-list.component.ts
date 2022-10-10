import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

import { CartService } from '../services/cart.service';
import {HttpClient} from '@angular/common/http';


//for search form and binding
import { FormGroup, FormControl } from '@angular/forms';





@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];



  profileForm = new FormGroup({
    pokeName: new FormControl(''),
  });


  // @ViewChild("pokeGrid") private pokeGridContainer: ElementRef;


  constructor(
    //inject myservice!
    private dataService: DataService,
    private cartService: CartService,

    private http: HttpClient


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


  onSubmit() {

    // 현 pokemon-grid 내용 지우기..
    this.pokemons = [];

    

    // TODO: EventEmitter로 폼 내용 보내기
    console.warn(this.profileForm.value.pokeName);

    this.dataService.getPokemons()
    .subscribe((response: any) => {    


      response.results.forEach( (result: any) => {        
        if(result.name == this.profileForm.value.pokeName)
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

}
