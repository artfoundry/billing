/**
 * Created by David on 2/10/16.
 */
"use strict";
var Patient = (function () {
    function Patient(id, name, address1, address2, city, state, zip) {
        this.id = id;
        this.name = name;
        this.address1 = address1;
        this.address2 = address2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    return Patient;
}());
exports.Patient = Patient;
//# sourceMappingURL=patient.js.map