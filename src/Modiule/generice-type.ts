type genericTupol<X, Y> = [X, Y];
type genericArray<T> = Array<T>;
type relationWithSelaryType = {
  name: string;
  salary: number;
};

interface relationWithSelaryInterface {
  name: string;
  salary: number;
}

const relation: genericTupol<string, number> = ["Rudra", 25];

const relationWithSelary: genericTupol<relationWithSelaryType, string> = [
  {
    name: "Rudra",
    salary: 445454,
  },
  "Rudra",
];

const rollData: genericArray<number> = [1, 2, 3, 4, 5];
const rollData2: Array<string> = ["46", "4", "65", "3", "24"];

const userRollNumber: genericArray<{ name: string; roll: number }> = [
  {
    name: "Rudra",
    roll: 1,
  },
  {
    name: "Ashim",
    roll: 2,
  },
];
