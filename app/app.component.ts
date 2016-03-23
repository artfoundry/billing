/**
 * Created by David on 2/11/16.
 */

import {Component} from 'angular2/core';
import {PatientService} from './patient.service';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {PatientsComponent} from './patients.component';
import {PrintableComponent} from './printable.component';
import {PatientDetailComponent} from "./patient-detail.component";

@Component({
    selector: 'my-app',
    template: `
        <h2>{{title}}</h2>
        <nav>
            <a [routerLink]="['Printable']">Printable</a>
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
        path: '/printable',
        name: 'Printable',
        component: PrintableComponent,
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
    title = 'Billing';
}