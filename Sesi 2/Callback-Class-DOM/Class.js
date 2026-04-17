class Employee {
  constructor(name, age, role, company = 'Hacktiv8') {
    this.name = name;
    this.age = age;
    this.company = company;
    this.role = role;
  }
  doWork() {
    console.log('done');
  }

  greet() {
    console.log(
      `Hi my name is ${this.name}, I work at ${this.company}. I'm ${this.age} years old.`,
    );
  }
}

// inheritance
class Developer extends Employee {
  constructor(name, age, company) {
    super(name, age, 'Developer', company); // new Employee(name, age, 'Developer', company)
  }

  greet() {
    console.log('console lognya developer');
  }

  code() {
    console.log('ngoding capek broo');
  }
}

class HR extends Employee {
  constructor(name, age, company) {
    super(name, age, 'HR', company); // new Employee(name, age, 'Developer', company)
  }
}

const arrizal = new Employee(
  'Arrizal',
  20,
  'Developer',
  'Aleta Planet',
);
const ridho = new Developer('Ridho', 21, 'Hacktiv8');
const cantika = new HR('Cantika', 22, 'Hacktiv8');

console.log(ridho);
ridho.greet();
arrizal.greet();
cantika.greet();
ridho.doWork();