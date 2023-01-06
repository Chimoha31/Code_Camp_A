import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  enteredSearchValue: string = '';

 @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>()

  onSearchTextChanged(){
    this.searchTextChange.emit(this.enteredSearchValue);
    // console.log(this.enteredSearchValue)
  }
}
