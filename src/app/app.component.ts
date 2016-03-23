/**
 * Created by David on 2/11/16.
 */

import {Component} from 'angular2/core';
import {PatientService} from './patient.service.ts';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {PatientsComponent} from './patients.component.ts';
import {PrintableComponent} from './printable.component.ts';
import {PatientDetailComponent} from "./patient-detail.component.ts";

@Component({
    selector: 'my-app',
    template: `
        <h2>{{title}}</h2>
        <nav>
            <a [routerLink]="['Preview']">Preview</a>
            <a [routerLink]="['Patients']">Patients</a>
        </nav>
        <router-outlet></router-outlet>
        `,
    styleUrls: ['styles/app.component.css'],
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, PatientService]
})

@RouteConfig([
    {
        path: '/preview',
        name: 'Preview',
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
