/**
 * Created by David on 2/10/16.
 */

import {PATIENTS} from './mock-patients';
import {Injectable} from 'angular2/core';

@Injectable()

export class PatientService {_
    getPatients() {
        return Promise.resolve(PATIENTS);
    }
}