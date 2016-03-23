/**
 * Created by David on 2/11/16.
 */

import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import {Patient} from './patient';
import {PatientService} from './patient.service.ts';
import {PatientDetailComponent} from './patient-detail.component.ts';

@Component({
    templateUrl: 'static/printable.component.html',
    styleUrls: ['styles/printable.component.css']
})

export class PrintableComponent implements OnInit {
    patients: Patient[] = [];

    constructor(private _router: Router,
                private _patientService: PatientService) {};

    ngOnInit() {
        this._patientService.getPatients().then(patients => this.patients = patients);
    }

    gotoDetail(patient: Patient) {
        let link = ['PatientDetail', { id: patient.id }];
        this._router.navigate(link);
    }
}
