import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  items: any


  addToCart(pokemon: string) {
    console.log('CartService: Sending addToCart Request to API');
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
    console.log("CartService: Sending getItems() request to API")
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
      console.log('CartService: Sending clearCart() RQ to API');
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
