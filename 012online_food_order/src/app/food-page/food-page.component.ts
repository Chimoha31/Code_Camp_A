import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';

@Component({
  selector: 'app-food-page',
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.css'],
})
export class FoodPageComponent implements OnInit {
  food!: Food;

  constructor(
    private _foodService: FoodService,
    private _route: ActivatedRoute,
    private _cartService: CartService,
    private _router: Router
  ) {
    this._route.params.subscribe((params: any) => {
      if (params.id) {
        this.food = this._foodService.getFoodById(params.id);
      }
    });
  }

  ngOnInit(): void {}

  addToCart() {
    this._cartService.addToCart(this.food);
    this._router.navigateByUrl('/cart-page');
  }
}
