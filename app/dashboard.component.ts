/**
 * Created by David on 2/11/16.
 */

import {Component, OnInit} from 'angular2/core';
import {Patient} from './patient';
import {PatientService} from './patient.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    patients: Patient[] = [];
    constructor(private _patientService: PatientService) {};
    ngOnInit() {
        this._patientService.getPatients().then(patients => this.patients = patients.slice(1,5));
    }
    gotoDetail() {

    }
}