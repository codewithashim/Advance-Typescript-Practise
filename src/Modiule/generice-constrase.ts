const addMeInMyCrusMind = <
  T extends { name: string; age: number; salary: number }
>(
  myInfo: T
) => {
  const crush = "Shanta";
  const newData = { ...myInfo, crush };
  return newData;
};

type myInfoTypeData = {
  name: string;
  age: number;
  salary: number;
  other1: boolean;
  other2: null;
};

const myInfo: myInfoTypeData = {
  name: "Ashim",
  age: 30,
  salary: 50000,
  other1: true,
  other2: null,
};

const result = addMeInMyCrusMind(myInfo)

result.other2
