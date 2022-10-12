import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})


export class CartComponent implements OnInit {
  //define items property to save cart item list
  items: any
  totalPrice: any

  constructor(
    private cartService: CartService
  ) { }

  async ngOnInit(): Promise<void> {
    console.log('This is cart')
    
    await this.cartService.getItems().then(value => this.items = value);

    this.totalPrice = this.cartService.getTotalPrice(this.items)
    console.log(3);
    console.log(this.items)
    console.log(4);
  }

  emptyCart(): void {
    this.cartService.clearCart()
    window.alert('Remove all the items in Cart')
  }

}
