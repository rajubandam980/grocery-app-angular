import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/productService';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule,RouterModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit {

  product?: Product;
  
  constructor(private route: ActivatedRoute, private productService: ProductService) {

  }
  ngOnInit(){
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    this.product = this.productService.getProductById(productId);
  }

}
