import { Component, Input, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?: string[];
  tags?: Tag[];

  @Input()
  justifyContent: string = 'center';

  constructor(private _foodService: FoodService) {}

  ngOnInit(): void {
    if (!this.foodPageTags) this.tags = this._foodService.getAllTags();
  }
}
