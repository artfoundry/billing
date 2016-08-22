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
var router_1 = require('@angular/router');
var patient_detail_component_1 = require('./patient-detail.component');
var patient_service_1 = require('./patient.service');
var PatientsComponent = (function () {
    function PatientsComponent(_patientService, _router) {
        this._patientService = _patientService;
        this._router = _router;
    }
    ;
    PatientsComponent.prototype.getPatients = function () {
        var _this = this;
        this._patientService.getPatients().then(function (patients) { return _this.patients = patients; });
    };
    PatientsComponent.prototype.gotoDetail = function (patient) {
        var link = ['/detail', patient.id];
        this._router.navigate(link);
    };
    PatientsComponent.prototype.ngOnInit = function () {
        this.getPatients();
    };
    PatientsComponent = __decorate([
        core_1.Component({
            templateUrl: 'src/static/patients.component.html',
            styleUrls: ['src/styles/patients.component.css'],
            directives: [patient_detail_component_1.PatientDetailComponent]
        }), 
        __metadata('design:paramtypes', [patient_service_1.PatientService, router_1.Router])
    ], PatientsComponent);
    return PatientsComponent;
}());
exports.PatientsComponent = PatientsComponent;
//# sourceMappingURL=patients.component.js.map