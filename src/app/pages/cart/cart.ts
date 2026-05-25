import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-cart',
  imports: [CommonModule, RouterModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {

  cartItems:any = [];

  constructor(private cartService: CartService) {

    this.cartItems = this.cartService.getCartItems();
    console.log('Cart items:', this.cartItems);

  }

  remove(id:number): void{
    this.cartService.removeFromCart(id);

    this.cartItems = this.cartService.getCartItems();

  }


  


}
