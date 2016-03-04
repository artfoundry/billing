/**
 * Created by David on 2/10/16.
 */
System.register(['./mock-patients', 'angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var mock_patients_1, core_1;
    var PatientService;
    return {
        setters:[
            function (mock_patients_1_1) {
                mock_patients_1 = mock_patients_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PatientService = (function () {
                function PatientService() {
                }
                PatientService.prototype.getPatients = function () {
                    return Promise.resolve(mock_patients_1.PATIENTS);
                };
                PatientService.prototype.getPatient = function (id) {
                    return Promise.resolve(mock_patients_1.PATIENTS).then(function (patients) { return patients.filter(function (patient) { return patient.id === id; })[0]; });
                };
                PatientService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PatientService);
                return PatientService;
            })();
            exports_1("PatientService", PatientService);
        }
    }
});
//# sourceMappingURL=patient.service.js.map