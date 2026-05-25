import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  // STORE CART ITEMS

  cartItems: any[] = [];

  // GET ITEMS

  getCartItems() {

    return this.cartItems;

  }

  // ADD ITEM

  addToCart(product: any): void {

    const existingItem =
      this.cartItems.find(
        item => item.id === product.id
      );

    // IF ITEM EXISTS

    if (existingItem) {

      existingItem.quantity++;

    } else {

      // ADD NEW ITEM

      this.cartItems.push({

        ...product,

        quantity: 1

      });

    }

    console.log('Cart Items:', this.cartItems);

  }

  // REMOVE ITEM

  removeFromCart(id: number): void {

    this.cartItems =
      this.cartItems.filter(
        item => item.id !== id
      );

  }

}