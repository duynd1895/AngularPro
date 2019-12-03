import { Component, Output, EventEmitter } from '@angular/core';
import { User } from './auth-form.interfact';


@Component({
    // tslint:disable-next-line:component-selector
    selector: 'auth-form',
    template:
    `
        <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
            <ng-content select="h3"></ng-content>
            <label>Email address
                <input type="email" name="email" [(ngModel)]="model.email">
            </label>
            <label>Password
                <input type="password" name="password" [(ngModel)]="model.password">
            </label>
            <ng-content select="button"></ng-content>
        </form>
    `
})

export class AuthFormComponent {
    model = {
        email: '',
        password: ''
    };
    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
    onSubmit(user: User) {
        this.submitted.emit(user);
        // console.log(this.model);
    }
}
