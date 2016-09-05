/**
 * Created by David on 2/10/16.
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
var patient_service_1 = require("./patient.service");
var PatientDetailComponent = (function () {
    function PatientDetailComponent(_patientService, _route) {
        this._patientService = _patientService;
        this._route = _route;
    }
    PatientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.forEach(function (params) {
            var id = +params['id'];
            _this._patientService.getPatient(id).then(function (patient) { return _this.patient = patient; });
        });
    };
    PatientDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], PatientDetailComponent.prototype, "patient", void 0);
    PatientDetailComponent = __decorate([
        core_1.Component({
            selector: 'my-patient-detail',
            templateUrl: 'src/static/patient-detail.component.html',
            styleUrls: ['src/styles/patient-detail.component.css']
        }), 
        __metadata('design:paramtypes', [patient_service_1.PatientService, router_1.ActivatedRoute])
    ], PatientDetailComponent);
    return PatientDetailComponent;
}());
exports.PatientDetailComponent = PatientDetailComponent;
//# sourceMappingURL=patient-detail.component.js.map