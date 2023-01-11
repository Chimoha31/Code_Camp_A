import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginUserData = {
    email: '',
    password: '',
  };
  constructor(private _auth: AuthService) {}

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res: any) => console.log(res),
      (err: any) => console.log(err)
    );
  }
}
