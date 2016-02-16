/**
 * Created by David on 2/11/16.
 */
System.register(['angular2/core', './patient-detail.component', './patient.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, patient_detail_component_1, patient_service_1;
    var PatientsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (patient_detail_component_1_1) {
                patient_detail_component_1 = patient_detail_component_1_1;
            },
            function (patient_service_1_1) {
                patient_service_1 = patient_service_1_1;
            }],
        execute: function() {
            PatientsComponent = (function () {
                function PatientsComponent(_patientService) {
                    this._patientService = _patientService;
                }
                ;
                PatientsComponent.prototype.getPatients = function () {
                    var _this = this;
                    this._patientService.getPatients().then(function (patients) { return _this.patients = patients; });
                };
                PatientsComponent.prototype.onSelect = function (patient) {
                    this.selectedPatient = patient;
                };
                PatientsComponent.prototype.ngOnInit = function () {
                    this.getPatients();
                };
                PatientsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-patients',
                        inputs: ['patient'],
                        template: "\n        <h1>{{title}}</h1>\n        <h2>My patients</h2>\n        <ul class=\"patients\">\n            <li *ngFor=\"#patient of patients\" [class.selected]=\"patient === selectedPatient\" (click)=\"onSelect(patient)\">\n                <span class=\"badge\">{{patient.id}}</span> {{patient.name}}\n            </li>\n        </ul>\n        ",
                        styles: ["\n      .selected {\n        background-color: #CFD8DC !important;\n        color: white;\n      }\n      .patients {\n        margin: 0 0 2em 0;\n        list-style-type: none;\n        padding: 0;\n        width: 20em;\n      }\n      .patients li {\n        cursor: pointer;\n        position: relative;\n        left: 0;\n        background-color: #EEE;\n        margin: .5em;\n        padding: .3em 0em;\n        height: 1.6em;\n        border-radius: 4px;\n      }\n      .patients li.selected:hover {\n        color: white;\n      }\n      .patients li:hover {\n        color: #607D8B;\n        background-color: #EEE;\n        left: .1em;\n      }\n      .patients .text {\n        position: relative;\n        top: -3px;\n      }\n      .patients .badge {\n        display: inline-block;\n        font-size: small;\n        color: white;\n        padding: 0.8em 0.7em 0em 0.7em;\n        background-color: #607D8B;\n        line-height: 1em;\n        position: relative;\n        left: -1px;\n        top: -4px;\n        height: 1.8em;\n        margin-right: .8em;\n        border-radius: 4px 0px 0px 4px;\n      }\n    "],
                        directives: [patient_detail_component_1.PatientDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [patient_service_1.PatientService])
                ], PatientsComponent);
                return PatientsComponent;
            })();
            exports_1("PatientsComponent", PatientsComponent);
        }
    }
});
//# sourceMappingURL=patients.component.js.map