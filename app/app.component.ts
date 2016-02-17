/**
 * Created by David on 2/11/16.
 */

import {Component} from 'angular2/core';
import {PatientService} from './patient.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {PatientsComponent} from './patients.component';
import {DashboardComponent} from './dashboard.component';
import {PatientDetailComponent} from "./patient-detail.component";

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['Dashboard']">Dashboard</a>
            <a [routerLink]="['Patients']">Patients</a>
        </nav>
        <router-outlet></router-outlet>
        `,
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, PatientService]
})

@RouteConfig([
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/patients',
        name: 'Patients',
        component: PatientsComponent
    },
    {
        path: '/detail/:id',
        name: 'PatientDetail',
        component: PatientDetailComponent
    }
])

export class AppComponent {
    title = 'List of patients';
}