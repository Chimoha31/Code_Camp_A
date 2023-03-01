import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchTerm: String = '';

  constructor(private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit(): void {
    console.log(this.searchTerm);
    this._route.params.subscribe((params: any) => {
      if (params.searchTerm) {
        this.searchTerm = params.searchTerm;
      }
    });
  }

  // void = not return anything
  search(): void {
    if (this.searchTerm) {
      this._router.navigate(['/search/' + this.searchTerm]);
    }
  }
}
