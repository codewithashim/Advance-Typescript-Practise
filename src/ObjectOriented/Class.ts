class Animel {
  constructor(
    public name: string,
    public spices: string,
    public sound: string
  ) {
    this.name = name;
    this.spices = spices;
    this.sound = sound;
  }

  public makeSound() {
    console.log(`The ${this.name} make ${this.sound} sound`);
  }
}

const dog = new Animel("Dog", "Mammal", "Woof");
dog.makeSound();

const cat = new Animel("Cat", "Mammal", "Meow");
cat.makeSound();
