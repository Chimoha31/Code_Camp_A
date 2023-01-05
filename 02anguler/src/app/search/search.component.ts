import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  searchValue: string = 'First Input Value';
  
  changesearchValue(e: Event) {
    console.log((<HTMLInputElement>e.target).value);
    this.searchValue = (<HTMLInputElement>e.target).value;
  }
}
