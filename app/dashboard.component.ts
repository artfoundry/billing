/**
 * Created by David on 2/11/16.
 */

import {Component, OnInit} from 'angular2/core';
import {Patient} from './patient';
import {Router} from 'angular2/router';
import {PatientService} from './patient.service';
import {PatientDetail} from './patient-detail.component';

@Component({
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    patients: Patient[] = [];

    constructor(private _router: Router,
                private _patientService: PatientService) {};

    ngOnInit() {
        this._patientService.getPatients().then(patients => this.patients = patients.slice(1,5));
    }

    gotoDetail(patient: Patient) {
        let link = ['PatientDetail', { id: patient.id }];
        this._router.navigate(link);
    }
}