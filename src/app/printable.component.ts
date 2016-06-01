/**
 * Created by David on 2/11/16.
 */

import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router-deprecated";
import {Patient} from "./patient";
import {PatientService} from "./patient.service";
import {PatientDetailComponent} from "./patient-detail.component";

@Component({
    templateUrl: "html/printable.component.html",
    styleUrls: ["css/printable.component.css"]
})

export class PrintableComponent implements OnInit {
    patients: Patient[] = [];

    constructor(private _router: Router,
                private _patientService: PatientService) {};

    ngOnInit() {
        this._patientService.getPatients().then(patients => this.patients = patients);
    }

    gotoDetail(patient: Patient) {
        let link = ["PatientDetail", { id: patient.id }];
        this._router.navigate(link);
    }
}
