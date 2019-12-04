import { Component } from '@angular/core';
import { User } from './auth-form/auth-form.interfact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPro';
  // tslint:disable-next-line:no-inferrable-types
  rememberMe: boolean =  false;
  createUser(user: User) {
    console.log('Create account', user);
  }
  loginUser(user: User) {
    console.log('User login:', user, this.rememberMe);
  }
  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }
}
