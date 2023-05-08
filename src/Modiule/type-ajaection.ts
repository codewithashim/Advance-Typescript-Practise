let temp: any;
temp = "Next lavel dev";
(temp as string).length;

function kgToGram(weight: number | string): string | number | null | undefined {
  if (typeof weight === "number") {
    return weight * 1000;
  }
  if (typeof weight === "string") {
    const value = parseFloat(weight) * 1000;
    return `the value is ${value} gm`;
  }
}

const resultToBeNumber = kgToGram(1000) as number;
const resultToBeString = kgToGram("1000") as string;

type CustomErrorType = {
  message: string;
};

try {
} catch (error) {
  console.log((error as CustomErrorType).message);
}
