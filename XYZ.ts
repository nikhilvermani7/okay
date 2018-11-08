class Employee {
    eid:number;
    ename:string;
    esalary:number;
    edesignation:string;
    constructor(id, name, salary=150000, designation="trainee") {
        this.eid=id;
        this.ename=name;
        this.esalary=salary;
        this.edesignation=designation;
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.esalary);
    }
}
let emp : Employee = new Employee("ab001",'abhi',1000);

