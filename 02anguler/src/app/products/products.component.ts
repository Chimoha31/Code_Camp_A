import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Apple watch',
      price: '320',
      color: 'black',
      available: 'Available',
      image: '/assets/shopping.jpg',
    },
    {
      id: 2,
      name: 'iphone 13',
      price: '320',
      color: 'black',
      available: 'Not Available',
      image: '/assets/shopping.jpg',
    },
    {
      id: 3,
      name: 'MacBook pro',
      price: '320',
      color: 'black',
      available: 'Available',
      image: '/assets/shopping.jpg',
    },
    {
      id: 4,
      name: 'iMac',
      price: '320',
      color: 'black',
      available: 'Available',
      image: '/assets/shopping.jpg',
    },
    {
      id: 5,
      name: 'Galaxy',
      price: '320',
      color: 'black',
      available: 'Available',
      image: '/assets/shopping.jpg',
    },
    {
      id: 6,
      name: 'Motolola',
      price: '320',
      color: 'black',
      available: 'Not Available',
      image: '/assets/shopping.jpg',
    },
  ];
}
