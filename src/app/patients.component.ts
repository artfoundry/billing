/**
 * Created by David on 2/11/16.
 */

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {PatientDetailComponent} from "./patient-detail.component";
import {Patient} from "./patient";
import {PatientService} from "./patient.service";

@Component({
    templateUrl: "html/patients.component.html",
    styleUrls: ["css/patients.component.css"],
    directives: [PatientDetailComponent]
})

export class PatientsComponent implements OnInit {
    public selectedPatient: Patient;
    public patients: Patient[];

    constructor(private _patientService: PatientService,
                private _router: Router) {};

    getPatients() {
        this._patientService.getPatients().then(patients => this.patients = patients);
    }

    gotoDetail(patient: Patient) {
        this.selectedPatient = patient;
        let link = ["PatientDetail", { id: this.selectedPatient.id }];
        this._router.navigate(link);
    }

    ngOnInit() {
        this.getPatients();
    }
}
