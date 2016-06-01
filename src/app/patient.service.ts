/**
 * Created by David on 2/10/16.
 */

import {PATIENTS} from "./mock-patients";
import {Injectable} from "@angular/core";

@Injectable()

export class PatientService {
    getPatients() {
        return Promise.resolve(PATIENTS);
    }
    getPatient(id: number) {
        return Promise.resolve(PATIENTS).then(
            patients => patients.filter(
                patient => patient.id === id)[0]
        );
    }
}
