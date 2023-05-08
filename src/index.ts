///////////////////////////////////////////////
//           Type Of TypeScript              //
/////////////////////////////////////////////*/

// 1. Number
// 2. String
// 3. Boolean
// 4. Array
// 5. Enum
// 6. Any
// 7. Void
// 8. Null
// 9. Undefined
// 10. Tuple
// 11. Primitive Type

///////  End of Type Of TypeScript     ////////

let course: string = "TypeScript & Next Dev";

let isFree: boolean = true;

let total: number = 100;

const isAdmin: boolean = true;

///////////////////////////////////////////////
//              Array Type                   //
/////////////////////////////////////////////*/

const studentList = ["Ashim", "Rudra", "Shanta", 5748];

const student: [string, number] = ["Ashim", 5748];

const productList: [
  {
    productName: string;
    productPrice: number;
    productDetails: string;
  }
] = [
  {
    productName: "Core i5",
    productPrice: 52003,
    productDetails: "lorem Ipsum is Lorem Ipsum ",
  },
];

///////         End of Array Type      ////////

///////////////////////////////////////////////
//           Function In Typescript          //
/////////////////////////////////////////////*/

function sumOfNumber(num1: number, num2: number) {
  const sumData = num1 + num2;
  return sumData;
}

sumOfNumber(254, 2354);

const data = [4, 6, 2];
const newData = data.map((elem: number) => elem * elem);

const person = {
  name: "John",
  balance: 500,
  addBalance(money: number) {
    return this.balance + money;
  },
};

// defult parameters

function sumOfNumberDefult(num1: number, num2: number = 50) {
  const sumData = num1 + num2;
  return sumData;
}
sumOfNumberDefult(60);

const myFirend = ["Rudra", "Anuj"];
const newFirend = ["Shanta", "Dipannita"];
myFirend.push(...newFirend);

// res paremitar

const gritFirend = (firend1: string, firend2: string, firend3: string): void =>
  console.log(`Hi ${firend1}\n  Hi ${firend2}\n Hi ${firend3} `);

gritFirend("Shanta", "Dipannita", "Shanta Rani");

const allFiredn = (...firend: string[]): void =>
  firend.forEach((firend: string) => console.log(`Hi ${firend}`));

allFiredn('firend1', 'firend2');  

///////  End of Function In Typescript  ////////
