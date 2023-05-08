class parentClass {
  name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.age = age;
    this.address = address;
  }

  makeSleap(hour: number): string {
    return `${this.name} is sleeping for ${hour} hours`;
  }
}

class Student extends parentClass {
  constructor(name: string, age: number, address: string) {
    super(name, age, address);
  }
}

const student1 = new Student("Ashim", 25, "Sylhet");
student1.makeSleap(5);

class Teacher extends parentClass {
  degictnetion: string;

  constructor(
    name: string,
    age: number,
    address: string,
    degictnetion: string
  ) {
    super(name, age, address);
    this.degictnetion = degictnetion;
  }

  takeclass(classTake: number): string {
    return `${this.name} is taking class ${classTake}`;
  }

  getSalary(): string {
    return `${this.name} is getting salary`;
  }
}

const teacher1 = new Teacher("Ashim", 25, "Sylhet", "Lecturer");

teacher1.takeclass(5);
teacher1.getSalary();
teacher1.makeSleap(5);

