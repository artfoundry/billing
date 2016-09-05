/**
 * Created by David on 2/10/16.
 */

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Patient } from './patient';
import { PatientService } from "./patient.service";

@Component({
    selector: 'my-patient-detail',
    templateUrl: 'src/static/patient-detail.component.html',
    styleUrls: ['src/styles/patient-detail.component.css']
})

export class PatientDetailComponent implements OnInit {
    @Input() patient: Patient;

    constructor(
        private _patientService: PatientService,
        private _route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            this._patientService.getPatient(id).then(patient => this.patient = patient);
        })
    }

    goBack() {
        window.history.back();
    }
}
