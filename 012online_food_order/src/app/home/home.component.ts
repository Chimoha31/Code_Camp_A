import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Food } from '../shared/models/Food';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  // Initialize
  foods: Food[] = [];

  constructor(
    private _http: HttpClient,
    private _foodService: FoodService,
    private _route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._route.params.subscribe((params: any) => {
      // console.log(params.searchTerm);
      if (params.searchTerm) {
        this.foods = this._foodService.getAllFoodsBySearch(params.searchTerm);
      } else if (params.tag) {
        this.foods = this._foodService.getAllFoodsByTag(params.tag);
      } else {
        this.foods = this._foodService.getAll();
      }
    });
    console.log(this.foods);
  }
}
