import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: any[] = [];

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

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  constructor(private http: HttpClient) {}
}
