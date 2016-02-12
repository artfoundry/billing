/**
 * Created by David on 2/11/16.
 */
System.register(['angular2/core', './patient.service', 'angular2/router', './patients.component', './dashboard.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, patient_service_1, router_1, patients_component_1, dashboard_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patient_service_1_1) {
                patient_service_1 = patient_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (patients_component_1_1) {
                patients_component_1 = patients_component_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'List of patients';
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n        <h1>{{title}}</h1>\n        <nav>\n            <a [routerLink]=\"['Dashboard']\">Dashboard</a>\n            <a [routerLink]=\"['Patients']\">Patients</a>\n        </nav>\n        <router-outlet></router-outlet>\n        ",
                        styles: ["\n        nav > a {\n            display: inline-block;\n            width: 5em;\n            height: 1.5em;\n            padding: .5em;\n            background-color: #EEE;\n            text-align: center;\n            line-height: 1.5em;\n            text-decoration: none;\n            color: black;\n            border-radius: 4px;\n            border: 2px solid #607D8B;\n        }\n        nav > a:hover {\n            background-color: #CFD8DC;\n            color: white;\n        }\n    "],
                        directives: [router_1.ROUTER_DIRECTIVES],
                        providers: [router_1.ROUTER_PROVIDERS, patient_service_1.PatientService]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/patients',
                            name: 'Patients',
                            component: patients_component_1.PatientsComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map