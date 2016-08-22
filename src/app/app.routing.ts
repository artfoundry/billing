/**
 * Created by dsmarkowitz on 8/21/16.
 */

import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './patients.component';
import { PrintableComponent } from './printable.component';
import { PatientDetailComponent } from './patient-detail.component';

const appRoutes: Routes = [
    {
        path: 'preview',
        component: PrintableComponent
    },
    {
        path: 'patients',
        component: PatientsComponent
    },
    {
        path: 'detail/:id',
        component: PatientDetailComponent
    }
]

export const routing = RouterModule.forRoot(appRoutes);
