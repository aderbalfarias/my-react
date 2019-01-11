import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from '../../services/settings.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    isLoggedIn: boolean;
    loggedInUser: string;
    showRegister: boolean;

    constructor(
        private router: Router,
        private settingsService: SettingsService
    ) { }

    ngOnInit() {
        this.isLoggedIn = true;
        this.loggedInUser = "test@test.com";
    };

    onLogoutClick() {
        //this.authService.logout();
        //alert
        this.router.navigate(['/login']);
    }
}
