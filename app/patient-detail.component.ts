/**
 * Created by David on 2/10/16.
 */

import {Component, OnInit} from 'angular2/core';
import {Patient} from './patient';
import {RouteParams} from 'angular2/router';
import {PatientService} from './patient.service';

@Component({
    selector: 'my-patient-detail',
    template: 'app/patient-detail.component.html'
})

export class PatientDetailComponent implements OnInit {
    patient: Patient;
    constructor(private _patientService: PatientService, private _routeParams: RouteParams) {}
    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._patientService.getPatient(id).then(patient => this.patient = patient);
    }
    goBack() {
        window.history.back();
    }
}