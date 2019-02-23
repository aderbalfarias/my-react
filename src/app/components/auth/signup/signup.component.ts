import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

    constructor(private authService: AuthService) { }

    ngOnInit() {  }

    onSignup(form: NgForm) {
        const firstname = form.value.firstname;
        const lastname = form.value.lastname;
        const email = form.value.email;
        const password = form.value.password;
        this.authService.signUpUser(firstname, lastname, email, password);
    }
}
