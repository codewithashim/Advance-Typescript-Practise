class Counter {
  static counter: number = 0;

  constructor(counter: number) {
    Counter.counter = counter;
  }

 static increment(){
    Counter.counter++;
  }

 static decrement() {
    Counter.counter--;
  }
}

console.log(Counter.counter);
Counter.increment();
console.log(Counter.counter);
Counter.decrement();
console.log(Counter.counter);