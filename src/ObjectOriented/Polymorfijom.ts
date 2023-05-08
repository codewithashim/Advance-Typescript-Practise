class Person {
  takeNap() {
    console.log("Sleeping ...");
  }
}

class StudentClass extends Person {
  takeNap() {
    console.log("Sleeping 12 hours ...");
  }
}

class Developer extends Person {
  takeNap(): void {
    console.log("Sleeping 4 hours ...");
  }
}

function getNap(param: Person): void {
  param.takeNap();
}

getNap(new Person());
getNap(new StudentClass());
getNap(new Developer());

const person1 = new Person();
const person2 = new StudentClass();
const person3 = new Developer();

class Shape {
  getAreia(): number {
    return 0;
  }
}

class Circel extends Shape {
  redius: number;
  constructor(redius: number) {
    super();
    this.redius = redius;
  }

  getAreia(): number {
    return Math.PI * this.redius * this.redius;
  }
}

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number) {
    super();
    this.width = width;
    this.height = height;
  }

  getAreia(): number {
    return this.width * this.height;
  }
}

function getAreiaShap (param: Shape): number {
  return param.getAreia();
}

const shape1 = new Shape();
const shape2 = new Circel(5);
const shape3 = new Rectangle(5, 10);

console.log(getAreiaShap(shape1));
console.log(getAreiaShap(shape2));
console.log(getAreiaShap(shape3));

