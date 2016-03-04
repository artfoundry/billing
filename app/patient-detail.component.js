/**
 * Created by David on 2/10/16.
 */
System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var PatientDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PatientDetailComponent = (function () {
                function PatientDetailComponent() {
                }
                PatientDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-patient-detail',
                        inputs: ['patient'],
                        template: "\n        <dif *ngIf=\"patient\">\n            <h2>{{patient.name}} Details</h2>\n            <div><label>id: </label>{{patient.id}}</div>\n            <div>\n                <label>name: </label>\n                <div><input [(ngModel)]=\"patient.name\" placeholder=\"name\"></div>\n            </div>\n        </dif>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], PatientDetailComponent);
                return PatientDetailComponent;
            })();
            exports_1("PatientDetailComponent", PatientDetailComponent);
        }
    }
});
//# sourceMappingURL=patient-detail.component.js.map