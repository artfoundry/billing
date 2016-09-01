/**
 * Created by dsmarkowitz on 8/21/16.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { PatientsComponent }  from './patients.component';
import { PatientDetailComponent } from "./patient-detail.component";
import { PrintableComponent } from "./printable.component";

import { PatientService } from './patient.service';

@NgModule({
    imports:      [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        PatientsComponent,
        PatientDetailComponent,
        PrintableComponent
    ],
    providers: [
        PatientService
    ],
    bootstrap:    [ AppComponent ],
})
export class AppModule { }