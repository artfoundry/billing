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
var PrintableComponent = (function () {
    function PrintableComponent(_router, _patientService) {
        this._router = _router;
        this._patientService = _patientService;
        this.patients = [];
    }
    ;
    PrintableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._patientService.getPatients().then(function (patients) { return _this.patients = patients; });
    };
    PrintableComponent.prototype.gotoDetail = function (patient) {
        var link = ['PatientDetail', { id: patient.id }];
        this._router.navigate(link);
    };
    PrintableComponent = __decorate([
        core_1.Component({
            templateUrl: 'src/static/printable.component.html',
            styleUrls: ['src/styles/printable.component.css']
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, patient_service_1.PatientService])
    ], PrintableComponent);
    return PrintableComponent;
}());
exports.PrintableComponent = PrintableComponent;
//# sourceMappingURL=printable.component.js.map