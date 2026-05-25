import { Injectable } from '@angular/core';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

 products: Product[] = [

  {
    id: 1,
    name: 'Fresh Apples',
    price: 5,
    category: 'Fruits',
    image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce',
    description: 'Fresh organic apples full of nutrients'
  },

  {
    id: 2,
    name: 'Bananas',
    price: 3,
    category: 'Fruits',
    image: 'https://www.allrecipes.com/thmb/jYmw-0Vijg1E_OuG2yGjEAcdQg4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-new-banana-adobe-ar-4x3-d8f0871e12214350be7ae5575eea4eed.jpg',
    description: 'Sweet and healthy bananas'
  },

  {
    id: 3,
    name: 'Orange Juice',
    price: 7,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba',
    description: 'Freshly squeezed orange juice'
  },

  {
    id: 4,
    name: 'Milk',
    price: 4,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150',
    description: 'Organic farm fresh milk'
  },

  {
    id: 5,
    name: 'Cheese',
    price: 8,
    category: 'Dairy',
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d',
    description: 'Premium cheddar cheese'
  },

  {
    id: 6,
    name: 'Bread',
    price: 2,
    category: 'Bakery',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff',
    description: 'Freshly baked bread'
  },

  {
    id: 7,
    name: 'Eggs',
    price: 6,
    category: 'Essentials',
    image: 'https://images.unsplash.com/photo-1518569656558-1f25e69d93d7',
    description: 'Farm fresh organic eggs'
  },

  {
    id: 8,
    name: 'Tomatoes',
    price: 4,
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1546094096-0df4bcaaa337',
    description: 'Fresh red tomatoes'
  },

  {
    id: 9,
    name: 'Potatoes',
    price: 3,
    category: 'Vegetables',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655',
    description: 'Healthy organic potatoes'
  },

  {
    id: 10,
    name: 'Chicken Breast',
    price: 12,
    category: 'Meat',
    image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791',
    description: 'Fresh boneless chicken breast'
  },

  {
    id: 11,
    name: 'Salmon Fish',
    price: 15,
    category: 'Seafood',
    image: 'https://images.unsplash.com/photo-1544943910-4c1dc44aab44',
    description: 'Fresh Atlantic salmon'
  },

  {
    id: 12,
    name: 'Coffee',
    price: 10,
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    description: 'Premium roasted coffee beans'
  }

];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {

  return this.products.find(
    product => product.id === id
  );

}

}