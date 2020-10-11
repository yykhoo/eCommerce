import { Component, HostListener, OnInit } from '@angular/core';

import { cartAPIService } from '../services/cartItemAPI.service';
import { productAPIService } from '../services/productAPI.service';
import { CartItem } from '../class/cartItem';
import { Product } from '../class/product';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem[];

  constructor(private cartAPIService: cartAPIService,
              private productAPIService: productAPIService ) { }

  ngOnInit(): void {    
    this.getCartItems(1);
  }

  getCartItems(cartId: number)
  {
    cartId = 1;
    this.cartAPIService.getCartItems(cartId).subscribe(
      data => {
          this.cartItems = data;
          this.populateProduct();
      }  
    )  
  }

  populateProduct()
  {
    for( let cartItem of this.cartItems )
    {
        this.productAPIService.getProductbyId(cartItem.productId).subscribe(
          data => {
            cartItem.product = data;
          }  
        )  
    }
  }

}
