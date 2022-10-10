import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../services/data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  pokemons: any[] = [];


  profileForm = new FormGroup({
    pokeName: new FormControl(''),
  });


  

  constructor(    
    private dataService: DataService,

    private http: HttpClient
    ) { }

  ngOnInit(): void {
   
}



  onSubmit() {
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
