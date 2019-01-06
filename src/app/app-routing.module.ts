import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SettingsComponent } from './components/settings/settings.component';

const routes: Routes = [
    //{ path: '', component: DashboardComponent },
    //{ path: 'login', component: LoginComponent },
    { path: 'settings', component: SettingsComponent },
    //{ path: '**', component: DashboardComponent }
];

@NgModule({
    exports: [RouterModule],
    imports: [
        RouterModule.forRoot(routes)
    ],
    providers: []
})
export class AppRoutingModule { }
