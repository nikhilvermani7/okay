var Employe = /** @class */ (function () {
    function Employe(values) {
        if (values === void 0) { values = {}; }
        Object.assign(this, values);
        console.log(this.empid);
        console.log(this.empname);
    }
    return Employe;
}());
var emp = null;
emp = new Employe({ empid: "101", empname: "vishal" });
