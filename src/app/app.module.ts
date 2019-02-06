import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SettingsService } from './services/settings.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AboutComponent } from './components/about/about.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        SettingsComponent,
        DashboardComponent,
        HomeComponent,
        NotFoundComponent,
        AboutComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [SettingsService],
    bootstrap: [AppComponent]
})

export class AppModule { }
