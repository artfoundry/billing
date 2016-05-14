/**
 * Created by David on 2/10/16.
 */

import {Component, OnInit} from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import {Patient} from './patient';
import {PatientService} from './patient.service';

@Component({
    inputs: ['patient'],
    templateUrl: 'src/static/patient-detail.component.html',
    styleUrls: ['src/styles/patient-detail.component.css']
})

export class PatientDetailComponent implements OnInit {
    patient: Patient;

    constructor(private _patientService: PatientService,
                private _routeParams: RouteParams) {}

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._patientService.getPatient(id).then(patient => this.patient = patient);
    }

    goBack() {
        window.history.back();
    }
}
