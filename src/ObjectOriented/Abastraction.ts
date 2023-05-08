// Interface

interface IVeaicel {
  startEngine(): void;
  stopEngine(): void;
  move(): void;
}

class Vaicel implements IVeaicel {
  constructor(
    public name: string,
    public model: string,
    public year: number,
    public color: string,
    public maxSpeed: number
  ) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
  }

  startEngine(): void {
    console.log("startEngine");
  }
  stopEngine(): void {
    console.log("stopEngine");
  }
  move(): void {
    console.log("move");
  }
}

const car = new Vaicel("BMW", "X5", 2020, "red", 300);

console.log(car);

// abstract

abstract class Vaicel2 {
  constructor(
    public name: string,
    public model: string,
    public year: number,
    public color: string,
    public maxSpeed: number
  ) {
    this.name = name;
    this.model = model;
    this.year = year;
    this.color = color;
    this.maxSpeed = maxSpeed;
  }

  abstract startEngine(): void;
  abstract stopEngine(): void;
  abstract move(): void;
}

class Vaicel3 extends Vaicel2 {
  constructor(
    public name: string,
    public model: string,
    public year: number,
    public color: string,
    public maxSpeed: number
  ) {
    super(name, model, year, color, maxSpeed);
  }

  startEngine(): void {
    console.log("startEngine");
  }
  stopEngine(): void {
    console.log("stopEngine");
  }
  move(): void {
    console.log("move");
  }
}

const car1 = new Vaicel("BMW", "X5", 2020, "red", 300);
