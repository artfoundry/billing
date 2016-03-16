/**
 * Created by David on 2/10/16.
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
var router_1 = require('angular2/router');
var patient_service_ts_1 = require('./patient.service.ts');
var PatientDetailComponent = (function () {
    function PatientDetailComponent(_patientService, _routeParams) {
        this._patientService = _patientService;
        this._routeParams = _routeParams;
    }
    PatientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._routeParams.get('id');
        this._patientService.getPatient(id).then(function (patient) { return _this.patient = patient; });
    };
    PatientDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    PatientDetailComponent = __decorate([
        core_1.Component({
            inputs: ['patient'],
            templateUrl: 'app/patient-detail.component.html',
            styleUrls: ['app/patient-detail.component.css']
        }), 
        __metadata('design:paramtypes', [patient_service_ts_1.PatientService, router_1.RouteParams])
    ], PatientDetailComponent);
    return PatientDetailComponent;
})();
exports.PatientDetailComponent = PatientDetailComponent;
//# sourceMappingURL=patient-detail.component.js.map