/**
 * Created by dsmarkowitz on 8/21/16.
 */
"use strict";
var router_1 = require('@angular/router');
var patients_component_1 = require('./patients.component');
var printable_component_1 = require('./printable.component');
var patient_detail_component_1 = require('./patient-detail.component');
var appRoutes = [
    {
        path: 'preview',
        component: printable_component_1.PrintableComponent
    },
    {
        path: 'patients',
        component: patients_component_1.PatientsComponent
    },
    {
        path: 'detail/:id',
        component: patient_detail_component_1.PatientDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map