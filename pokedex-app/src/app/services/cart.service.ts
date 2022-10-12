import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // items: any[] =[];
  items: any


  addToCart(pokemon: string) {
    // this.items.push(pokemon);
    console.log('카트서비스에서 쏴본다..');
    this.http.post('/api/post/cart', pokemon).subscribe(
      (res: any) => {
        // console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  async getItems() {
    console.log("welcome to cart service getItems()")
    //return await this.http.get<any[]>('/api/get/cart').toPromise() as Data;
    return await this.http.get('/api/get/cart').toPromise();
    /*  {
        console.log(1);
        console.log(res);
        console.log(2);
        this.items=res;

        
  
       });
    return this.items;*/
  }


  getTotalPrice(items: { price: number; }[]): any {
    let total = 0;
    let jsonSize = Object.keys(items).length;
    for (let i=0; i < jsonSize; i++){
      total += items[i].price
    }
    return total;
  };




  clearCart() {
      // this.items.push(pokemon);
      console.log('카트에서 지워주라..');
      this.http.delete('/api/delete/cart').subscribe(
        (res: any) => {
          // console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
    }

  constructor(private http: HttpClient) {}
}
