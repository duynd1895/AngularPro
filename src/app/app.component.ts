import { Component } from '@angular/core';
import { User } from './auth-form/auth-form.interfact';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPro';
  createUser(user: User) {
    console.log('Create account', user);
  }
  loginUser(user: User) {
    console.log('User login:', user);
  }
}
