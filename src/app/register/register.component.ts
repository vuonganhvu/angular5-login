import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../model/User';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  errorMessage: boolean;

  constructor(private _userService: UserService) {
  }

  ngOnInit() {
    this.reset();
  }

  register() {
    this._userService.getGoogle().subscribe((res: any) => {
        console.log(res);
      }, (error: any) => {
        console.log(error);
      }
    );
  }

  reset() {
    this.user = new User();
    this.errorMessage = false;
  }

  validateRePass() {
    this.errorMessage = false;
    if (this.user.rePassword && this.user.password) {
      if (this.user.password !== this.user.rePassword) {
        console.log('fsdfs');
        this.errorMessage = true;
      }
    }
  }
}
