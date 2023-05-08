///////////////////////////////////////////////
//           TypeGard                       //
/////////////////////////////////////////////*/

// Key of type
type AlphaNewmericType = string | number;

function add(param1: AlphaNewmericType, param2: AlphaNewmericType) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else if (typeof param1 === "string" && typeof param2 === "string") {
    return param1.concat(param2);
  }
}
add(1, 2);

// in gard
type NormalUserType = {
  name: string;
};

type AdminUserType = {
  name: string;
  role: "admin";
};

const normalUser1: NormalUserType = {
  name: "Ashim",
};

const adminUser1: AdminUserType = {
  name: "Ashim Rudra Paul",
  role: "admin",
};

function getUser(user: NormalUserType | AdminUserType) {
  if ("role" in user) {
    console.log(user.role);
    return `${user.name} is an admin`;
  } else {
    console.log(user.name);
    return `${user.name} is a normal user`;
  }
}

getUser(normalUser1);
getUser(adminUser1);



class animalClass {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  makingSound(): string {
    return `${this.name} is making sound`;
  }
}

class dogClass extends animalClass {
  constructor(name: string, species: string) {
    super(name, species);
  }

  makebark(): string {
    return `${this.name} is barking`;
  }
}

class catClass extends animalClass {
  constructor(name: string, species: string) {
    super(name, species);
  }
  meuuing(): string {
    return `${this.name} is meuuing`;
  }
}

const animal1 = new dogClass("Tommy", "Dog");

const animal2 = new catClass("Tom", "Cat");

function getAnimal (obj: animalClass) {
    if (obj instanceof dogClass) {
        return obj.makebark();  
    }
}

///////      End of TypeGard          ////////
