/**
 * Created by David on 2/10/16.
 */

import { PATIENTS } from './mock-patients';
import { Patient } from './patient';
import { Injectable } from '@angular/core';

@Injectable()

export class PatientService {
    getPatients() {
        return Promise.resolve(PATIENTS);
    }
    getPatient(id: number): Promise<Patient> {
        return this.getPatients()
            .then(patients => patients.find(patient => patient.id === id));
    }
}