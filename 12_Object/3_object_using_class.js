class Employee {
    constructor(name, empId, department, city) {
        this.name = name;
        this.empId = empId;
        this.department = department;
        this.city = city;
    }
}

const Employee1 = new Employee("kalpesh", 101, "HR", "Surat");

const Employee2 = new Employee("jay", 102, "Finance", "Vadodara");

const Employee3 = new Employee("viru", 103, "Marketing", "Ahmedabad");

console.log("Employee 1 :", Employee1);

console.log("Employee 2 :", Employee2);

console.log("Employee 3 :", Employee3);