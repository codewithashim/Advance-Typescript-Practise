// generic interface

interface crashInterface<T, U = undefined> {
  name: string;
  husbend: T;
  wife?: U;
}

const crash: crashInterface<string> = {
  name: "Shanta",
  husbend: "Rudra",
};

const crash2: crashInterface<number> = {
  name: "Shanta",
  husbend: 1,
};

const crash3: crashInterface<boolean> = {
  name: "Shanta",
  husbend: true,
};

const crash4: crashInterface<{ name: string; age: number; salary: number }> = {
  name: "Shanta",
  husbend: {
    name: "Rudra",
    age: 25,
    salary: 454545,
  },
};
