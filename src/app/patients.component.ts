/**
 * Created by David on 2/11/16.
 */

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {PatientDetailComponent} from './patient-detail.component';
import {Patient} from './patient';
import {PatientService} from './patient.service';

@Component({
    templateUrl: 'src/static/patients.component.html',
    styleUrls: ['src/styles/patients.component.css'],
    directives: [PatientDetailComponent]
})

export class PatientsComponent implements OnInit {
    constructor(
        private _patientService: PatientService,
        private _router: Router
    ) {};

    public patients: Patient[];

    getPatients(): void {
        this._patientService.getPatients().then(patients => this.patients = patients);
    }

    gotoDetail(patient: Patient): void {
        let link = ['/detail', patient.id];
        this._router.navigate(link);
    }

    ngOnInit(): void {
        this.getPatients();
    }
}
