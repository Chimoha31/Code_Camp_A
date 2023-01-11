import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  registerUserData = {
    email: '',
    password: '',
  };

  constructor(private _auth: AuthService) {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    );
  }
}
