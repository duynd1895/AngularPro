import { Component, Output, EventEmitter, ContentChild, AfterContentInit } from '@angular/core';
import { User } from './auth-form.interfact';
import { AuthRememberComponent } from './auth-remember.component';

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
            <ng-content select="auth-remember"></ng-content>
            <div *ngIf="showMessage">
                You will be logged in 30 days
            </div>
            <ng-content select="button"></ng-content>
        </form>
    `
})

export class AuthFormComponent implements AfterContentInit {
    showMessage: boolean;
    model = {
        email: '',
        password: ''
    };
    @ContentChild(AuthRememberComponent, {static: false}) remember: AuthRememberComponent;
    @Output() submitted: EventEmitter<User> = new EventEmitter<User>();
    onSubmit(user: User) {
        this.submitted.emit(user);
    }
    ngAfterContentInit() {
        if (this.remember) {
            this.remember.checked.subscribe((checked: boolean) => this.showMessage = checked);
          }
    }
}
