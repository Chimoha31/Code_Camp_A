import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from './demo/demo.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('dobinput') dateOfBirth: ElementRef | undefined;
  @ViewChild('ageinput') age: ElementRef | undefined;
  @ViewChild(DemoComponent, { static: true }) demoComp:
    | DemoComponent
    | undefined;

  calculateAge() {
    let birthYear = new Date(
      this.dateOfBirth?.nativeElement.value
    ).getFullYear();
    let currentYear = new Date().getFullYear();
    let currentAge = currentYear - birthYear;

    this.age.nativeElement.value = currentAge;
  }
}
