import { Component, OnInit } from '@angular/core';
import {User} from '../model/User';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.reset();
  }

  login() {
    console.log('Login process...');
    this.user = {
      id: 1,
      name: 'Anh Vuong',
      password: '',
      rePassword: ''
    };
    this._router.navigate(['/dashboard/' + this.user.id]);
  }

  reset() {
    this.user = new User();
  }
}
