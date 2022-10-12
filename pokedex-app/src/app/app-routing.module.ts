import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { CartComponent } from './cart/cart.component';

//Routes object dealing with routing mapping info
const routes: Routes = [
  { path: '', component: PokemonListComponent},
  { path: 'cart', component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// RouterModule.forRoot(routes):
// pass routing mapping info to RouterModule's static method forRoot. 
// now Angular router module recognizes client-side routing mapping info