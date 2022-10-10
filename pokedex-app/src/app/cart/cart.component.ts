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
  // items = this.cartService.getItems();
  items: any

  constructor(
    private cartService: CartService
  ) { }




  async ngOnInit(): Promise<void> {
    console.log('This is cart')
    
    await this.cartService.getItems().then(value => this.items = value);

    console.log(3);
    console.log(this.items)
    console.log(4);
  }

}
