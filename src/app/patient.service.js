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
var mock_patients_1 = require('./mock-patients');
var PatientService = (function () {
    function PatientService() {
    }
    PatientService.prototype.getPatients = function () {
        return Promise.resolve(mock_patients_1.PATIENTS);
    };
    PatientService.prototype.getPatient = function (id) {
        return this.getPatients()
            .then(function (patients) { return patients.find(function (patient) { return patient.id === id; }); });
    };
    PatientService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PatientService);
    return PatientService;
}());
exports.PatientService = PatientService;
//# sourceMappingURL=patient.service.js.map