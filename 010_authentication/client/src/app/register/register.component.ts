import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private _auth: AuthService, private _router: Router) {}

  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', JSON.stringify(res.token));
        this._router.navigate(['/special']);
      },
      (err: any) => console.log(err)
    );
  }
}
