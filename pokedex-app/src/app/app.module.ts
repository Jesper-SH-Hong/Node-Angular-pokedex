import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CartComponent } from './cart/cart.component';

//for HTTP rq
import {HttpClientModule} from '@angular/common/http';



import { ReactiveFormsModule } from '@angular/forms';
// import { FormControl, FormGroup } from '@angular/forms';    idk why it makes error during compile..


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    
    ReactiveFormsModule,
    AppRoutingModule,

    //for HTTP RQ
    HttpClientModule,

    //FormControl..compile_error...


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
