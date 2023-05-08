type User = {
  name: string;
  age: number;
};

type extendsUser = User & {
  address: string;
  role: string;
};

interface UserInterface {
  name: string;
  age: number;
}

interface IExtendedUser extends UserInterface {
  address: string;
  role: string;
}

const userTypeAlias: User = {
  name: "Rudra",
  age: 25,
};

const userInterface: UserInterface = {
  name: "Rudra",
  age: 25,
};

const userExtended: IExtendedUser = {
  name: "Rudra",
  age: 25,
  address: "Dhaka",
  role: "Admin",
};

type addNumberType = (num1: number, num2: number) => number;

const addNumber: addNumberType = (num1, num2) => num1 + num2;

interface IaddNumber {
  (num1: number, num2: number): number;
}

const addNumberInterface: IaddNumber = (num1, num2) => num1 + num2;

type rollNumberType = number[];

const rollNumber: rollNumberType = [1, 2, 3, 4, 5];

interface IrollNumber {
  [index: number]: number;
}

const rollNumberInterface: IrollNumber = [1, 2, 3, 4, 5];