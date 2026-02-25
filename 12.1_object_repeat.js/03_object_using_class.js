class Employee {
  constructor(name, id, department, salary) {
    this.name = name;
    this.id = id;
    this.department = department;
    this.salary = salary;
  }
}

const employee1 = new Employee("KG", 101, "IT", 50000);

const employee2 = new Employee("VG", 102, "HR", 45000);

const employee3 = new Employee("YG", 103, "Finance", 60000);

console.log("Employee 1", employee1);
console.log("Employee 2", employee2);
console.log("Employee 3", employee3);