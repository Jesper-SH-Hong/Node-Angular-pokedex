import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CartComponent } from './cart/cart.component';

//for HTTP rq
import {HttpClientModule} from '@angular/common/http';

//for routers
import { Routes, RouterModule } from '@angular/router';





// const appRoutes: Routes = [
//   { path: '', component: PokemonListComponent},
//   { path: '/cart', component: CartComponent},
// ];


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    //for HTTP RQ
    HttpClientModule,


    //for routers
    // RouterModule.forRoot(appRoutes)

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
