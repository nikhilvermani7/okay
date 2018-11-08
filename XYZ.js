var Employee = /** @class */ (function () {
    function Employee(id, name, salary, designation) {
        if (salary === void 0) { salary = 150000; }
        if (designation === void 0) { designation = "trainee"; }
        this.eid = id;
        this.ename = name;
        this.esalary = salary;
        this.edesignation = designation;
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.esalary);
    }
    return Employee;
}());
var emp = new Employee("ab001", 'abhi', 1000);
