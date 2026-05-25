import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ProductService } from '../../services/productService';
import { CartService } from '../../services/cart.service';




@Component({
  selector: 'app-products',
  imports: [CommonModule,RouterLink,RouterModule],
  templateUrl: './products.html',
  styleUrl: './products.scss',
})
export class Products implements OnInit {
  products : Product[] = [];

  constructor(
    private productService: ProductService, 
    private cartService: CartService,
  private router: Router) {

  }
  ngOnInit() {
    this.products = this.productService.getProducts();
  
}
addToCart(product: any): void {
  this.cartService.addToCart(product);
console.log('Product added to cart:', product);
}
}
