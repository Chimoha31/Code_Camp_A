import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private _auth: AuthService, private _router: Router) {}

  loginUser() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res: any) => {
        console.log(res);
        sessionStorage.setItem('token', res.token);
        this._router.navigate(['/special']);
      },
      (err: any) => console.log(err)
    );
  }
}
