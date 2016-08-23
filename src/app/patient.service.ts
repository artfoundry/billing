/**
 * Created by David on 2/10/16.
 */

import { Injectable } from '@angular/core';

import { PATIENTS } from './mock-patients';
import { Patient } from './patient';

@Injectable()

export class PatientService {
    getPatients(): Promise<Patient[]> {
        return Promise.resolve(PATIENTS);
    }
    getPatient(id: number): Promise<Patient> {
        return this.getPatients()
            .then(patients => patients.find(patient => patient.id === id));
    }
}