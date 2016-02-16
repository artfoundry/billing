/**
 * Created by David on 2/11/16.
 */

import {Component, OnInit} from 'angular2/core';
import {PatientDetailComponent} from './patient-detail.component';
import {Patient} from './patient';
import {PatientService} from './patient.service';

@Component({
    selector: 'my-patients',
    inputs: ['patient'],
    template: `
        <h1>{{title}}</h1>
        <h2>My patients</h2>
        <ul class="patients">
            <li *ngFor="#patient of patients" [class.selected]="patient === selectedPatient" (click)="onSelect(patient)">
                <span class="badge">{{patient.id}}</span> {{patient.name}}
            </li>
        </ul>
        `,
    styles: [`
      .selected {
        background-color: #CFD8DC !important;
        color: white;
      }
      .patients {
        margin: 0 0 2em 0;
        list-style-type: none;
        padding: 0;
        width: 20em;
      }
      .patients li {
        cursor: pointer;
        position: relative;
        left: 0;
        background-color: #EEE;
        margin: .5em;
        padding: .3em 0em;
        height: 1.6em;
        border-radius: 4px;
      }
      .patients li.selected:hover {
        color: white;
      }
      .patients li:hover {
        color: #607D8B;
        background-color: #EEE;
        left: .1em;
      }
      .patients .text {
        position: relative;
        top: -3px;
      }
      .patients .badge {
        display: inline-block;
        font-size: small;
        color: white;
        padding: 0.8em 0.7em 0em 0.7em;
        background-color: #607D8B;
        line-height: 1em;
        position: relative;
        left: -1px;
        top: -4px;
        height: 1.8em;
        margin-right: .8em;
        border-radius: 4px 0px 0px 4px;
      }
    `],
    directives: [PatientDetailComponent]
})

export class PatientsComponent implements OnInit {
    constructor(private _patientService: PatientService) {};
    public selectedPatient: Patient;
    public patients: Patient[];
    getPatients() {
        this._patientService.getPatients().then(patients => this.patients = patients);
    }
    onSelect(patient: Patient) {
        this.selectedPatient = patient;
    }
    ngOnInit() {
        this.getPatients();
    }
}