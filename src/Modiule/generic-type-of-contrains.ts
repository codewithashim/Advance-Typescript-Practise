type PersonDataType = {
  name: string;
  age: number;
  address: string;
};

type newPersonDataType = "name" | "age" | "address";

type PersonData = keyof PersonDataType;

const a: PersonData = "address";

function getProparty<X, Y extends keyof X>(obj: X, key: Y) {
  obj[key];
}

const proparty = getProparty(
  {
    name: "person",
    age: 20,
  },
  "age"
);
