/**
 * Created by David on 2/11/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var patient_service_ts_1 = require('./patient.service.ts');
var router_1 = require('angular2/router');
var patients_component_ts_1 = require('./patients.component.ts');
var printable_component_ts_1 = require('./printable.component.ts');
var patient_detail_component_ts_1 = require("./patient-detail.component.ts");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Billing';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h2>{{title}}</h2>\n        <nav>\n            <a [routerLink]=\"['Printable']\">Printable</a>\n            <a [routerLink]=\"['Patients']\">Patients</a>\n        </nav>\n        <router-outlet></router-outlet>\n        ",
            //styleUrls: ['app/app.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES],
            providers: [router_1.ROUTER_PROVIDERS, patient_service_ts_1.PatientService]
        }),
        router_1.RouteConfig([
            {
                path: '/printable',
                name: 'Printable',
                component: printable_component_ts_1.PrintableComponent,
                useAsDefault: true
            },
            {
                path: '/patients',
                name: 'Patients',
                component: patients_component_ts_1.PatientsComponent
            },
            {
                path: '/detail/:id',
                name: 'PatientDetail',
                component: patient_detail_component_ts_1.PatientDetailComponent
            }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map