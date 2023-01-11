import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUserData = {
    email: '',
    password: ''
  }

  loginUser() {
    console.log(this.loginUserData)
  }

}
