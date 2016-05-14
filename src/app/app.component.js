/**
 * Created by David on 2/11/16.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var patient_service_1 = require('./patient.service');
var patients_component_1 = require('./patients.component');
var printable_component_1 = require('./printable.component');
var patient_detail_component_1 = require('./patient-detail.component');
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Billing';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h2>{{title}}</h2>\n        <nav>\n            <a [routerLink]=\"['Preview']\">Preview</a>\n            <a [routerLink]=\"['Patients']\">Patients</a>\n        </nav>\n        <router-outlet></router-outlet>\n        ",
            styleUrls: ['src/styles/app.component.css'],
            directives: [router_deprecated_1.ROUTER_DIRECTIVES],
            providers: [router_deprecated_1.ROUTER_PROVIDERS, patient_service_1.PatientService]
        }),
        router_deprecated_1.RouteConfig([
            {
                path: '/preview',
                name: 'Preview',
                component: printable_component_1.PrintableComponent,
                useAsDefault: true
            },
            {
                path: '/patients',
                name: 'Patients',
                component: patients_component_1.PatientsComponent
            },
            {
                path: '/detail/:id',
                name: 'PatientDetail',
                component: patient_detail_component_1.PatientDetailComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map