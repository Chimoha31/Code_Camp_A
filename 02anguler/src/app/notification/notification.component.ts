import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div
    class="alert alert-primary text-center mt-3 notification"
    [ngClass]="{ fadeOut: displayNotification }"
  >
    This website uses cookies to provide better user experience
    <div class="close">
      <button class="btn" (click)="closeNotification()">X</button>
    </div>
  </div>`,
  styles: [
    '.notification{font-size: 20px;}',
    '.close{float: right; margin-top: -5px;}',
    '.fadeOut{visibility: hidden; opacity: 0; transition: visibility 0s 1.5s, opacity 1.5s ease;}',
  ],
})
export class NotificationComponent {
  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
    console.log(this.displayNotification);
  }
}
