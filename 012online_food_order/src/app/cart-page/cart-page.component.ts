import { Component } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { FoodService } from '../services/food/food.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent {
  cart!: Cart;

  constructor(
    private _cartService: CartService
  ) {
    this.setCart();
  }

  removeFromCart(cartItem: CartItem) {
    this._cartService.removeFromCart(cartItem.food.id);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString);
    this._cartService.changeQuantity(cartItem.food.id, quantity);
  }

  setCart() {
    this.cart = this._cartService.getCart();
  }
}
