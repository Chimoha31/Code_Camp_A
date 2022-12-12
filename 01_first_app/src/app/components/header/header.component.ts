import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  title: string = 'This is Anguler';

  constructor() {}
  ngOnInit(): void {}

  toggleAddTask() {
    console.log('toggle');
  }
}
