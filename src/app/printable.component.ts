/**
 * Created by David on 2/11/16.
 */

import { Component, OnInit } from '@angular/core';

import { Patient } from './patient';
import { PatientService } from './patient.service';

@Component({
    templateUrl: 'src/static/printable.component.html',
    styleUrls: ['src/styles/printable.component.css']
})

export class PrintableComponent implements OnInit {
    patients: Patient[] = [];

    constructor(
        private _patientService: PatientService
    ) {}

    ngOnInit() {
        this._patientService.getPatients().then(patients => this.patients = patients);
    }
}
