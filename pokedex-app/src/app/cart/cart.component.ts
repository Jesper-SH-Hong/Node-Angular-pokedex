import { Component, OnInit } from '@angular/core';

//import from Cart Service
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  //define items property to save cart item list
  items = this.cartService.getItems();

  constructor(
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    console.log('This is cart')
    // this.cartService.getItems
    // this.cartService.getCart()
    // .subscribe((response: any) => {
    //   console.log("카트 리스폰스다..")
    // })
  }

}
