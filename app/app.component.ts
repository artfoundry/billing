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
    styles: [`
        nav > a {
            display: inline-block;
            width: 5em;
            height: 1.5em;
            padding: .5em;
            background-color: #EEE;
            text-align: center;
            line-height: 1.5em;
            text-decoration: none;
            color: black;
            border-radius: 4px;
            border: 2px solid #607D8B;
        }
        nav > a:hover {
            background-color: #CFD8DC;
            color: white;
        }
    `],
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
        path: '/details/:id',
        name: 'PatientDetails',
        component: PatientDetailComponent
    }
])

export class AppComponent {
    title = 'List of patients';
}