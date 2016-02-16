/**
 * Created by David on 2/10/16.
 */
System.register(['angular2/core', 'angular2/router', './patient.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, patient_service_1;
    var PatientDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (patient_service_1_1) {
                patient_service_1 = patient_service_1_1;
            }],
        execute: function() {
            PatientDetailComponent = (function () {
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
                        selector: 'my-patient-detail',
                        template: 'app/patient-detail.component.html'
                    }), 
                    __metadata('design:paramtypes', [patient_service_1.PatientService, router_1.RouteParams])
                ], PatientDetailComponent);
                return PatientDetailComponent;
            })();
            exports_1("PatientDetailComponent", PatientDetailComponent);
        }
    }
});
//# sourceMappingURL=patient-detail.component.js.map