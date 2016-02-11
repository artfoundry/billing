/**
 * Created by David on 2/10/16.
 */

import {Component} from 'angular2/core';
import {Patient} from './patient'

@Component({
    selector: 'my-patient-detail',
    inputs: ['patient'],
    template: `
        <dif *ngIf="patient">
            <h2>{{patient.name}} Details</h2>
            <div><label>id: </label>{{patient.id}}</div>
            <div>
                <label>name: </label>
                <div><input [(ngModel)]="patient.name" placeholder="name"></div>
            </div>
        </dif>
    `
})

export class PatientDetailComponent {
    patient: Patient;
}