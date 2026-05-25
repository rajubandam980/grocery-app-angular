import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

  categories = [

    {
      name: 'Vegetables'
    },

    {
      name: 'Fruits'
    },

    {
      name: 'Dairy'
    },

    {
      name: 'Snacks'
    },

    {
      name: 'Beverages'
    },

    {
      name: 'Bakery'
    }

  ];

  featuredProducts = [

    {
      name: 'Fresh Apples',
      price: 5,
      image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce'
    },

    {
      name: 'Organic Milk',
      price: 3,
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150'
    },

    {
      name: 'Fresh Bread',
      price: 4,
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff'
    },

    {
      name: 'Orange Juice',
      price: 6,
      image: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b'
    }

  ];

}
