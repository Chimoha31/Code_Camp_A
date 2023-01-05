import { Component } from '@angular/core';

//-----------------
// About Selector 
//-----------------
// 'OO' = like as html tag
// '[OO]' = like as html attribute
// '.OO' = like as Css class
@Component({
  selector: '.app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})

export class NavComponent {

  sitename: string = "eShopping"

}
