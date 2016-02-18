/**
 * Created by David on 2/11/16.
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
    var PrintableComponent;
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
            PrintableComponent = (function () {
                function PrintableComponent(_router, _patientService) {
                    this._router = _router;
                    this._patientService = _patientService;
                    this.patients = [];
                }
                ;
                PrintableComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this._patientService.getPatients().then(function (patients) { return _this.patients = patients.slice(1, 5); });
                };
                PrintableComponent.prototype.gotoDetail = function (patient) {
                    var link = ['PatientDetail', { id: patient.id }];
                    this._router.navigate(link);
                };
                PrintableComponent = __decorate([
                    core_1.Component({
                        templateUrl: 'app/printable.component.html',
                        styleUrls: ['app/printable.component.css']
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, patient_service_1.PatientService])
                ], PrintableComponent);
                return PrintableComponent;
            })();
            exports_1("PrintableComponent", PrintableComponent);
        }
    }
});
//# sourceMappingURL=printable.component.js.map