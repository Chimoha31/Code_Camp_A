import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div
    class="alert alert-primary text-center mt-3 notification"
    [hidden]="displayNotification"
  >
    This website uses cookies to provide better user experience
    <div class="close">
      <button class="btn" (click)="closeNotification()">X</button>
    </div>
  </div>`,
  styles: [
    '.notification{font-size: 20px;}',
    '.close{float: right; margin-top: -5px;}',
  ],
})
export class NotificationComponent {
  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
    console.log(this.displayNotification);
  }
}
