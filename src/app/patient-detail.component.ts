/**
 * Created by David on 2/10/16.
 */

import { Component, OnInit, Input, ElementRef } from '@angular/core'; // trigger, state, style, transition, animate used for animation
import { ActivatedRoute, Params } from '@angular/router';
import { Patient } from './patient';
import { PatientService } from "./patient.service";

@Component({
    selector: 'my-patient-detail',
    templateUrl: 'src/static/patient-detail.component.html',
    styleUrls: ['src/styles/patient-detail.component.css'],
    // animations: [
    //     trigger("savedState", [
    //         state("void", style({
    //             opacity: "0"
    //         })),
    //         state("active", style({
    //             opacity: "1"
    //         })),
    //         transition("active <=> void", animate("100ms"))
    //     ])
    // ]
})

export class PatientDetailComponent implements OnInit {
    @Input() patient: Patient;

    private el: HTMLElement;

    constructor(
        private _patientService: PatientService,
        private _route: ActivatedRoute,
        el: ElementRef
    ) {
        this.el = el.nativeElement;
    }

    ngOnInit(): void {
        this._route.params.forEach((params: Params) => {
            let id = +params['id'];
            this._patientService.getPatient(id).then(patient => this.patient = patient);
        })
    }

    goBack() {
        window.history.back();
    }

    // showSaved() {
    //     this.el.classList.add('visible');
    //     this.el.classList.add('fadeout');
    //     this.el.classList.remove('visible');
    // }
}
