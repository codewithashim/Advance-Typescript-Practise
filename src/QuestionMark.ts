const age: number = 25;

if (age >= 18) {
  console.log("You are eligible");
} else {
  console.log("You are not eligible");
}

const isAdalt = age >= 18 ? "You are eligible" : "You are not eligible";

// Nalis consaltation operator

const isAuthenticeUser = null ?? "User is not Authentice";

const userName = isAuthenticeUser ?? "User is not Authentice";

type UserType = {
  name: string;
  age: number;
  address: {
    city: string;
    country: string;
    home?: string;
  };
  isAuthentice: boolean;
};

const user: UserType = {
  name: "Rudra",
  age: 25,
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    home: "Dhaka",
  },
  isAuthentice: true,
};

const user2: UserType = {
    name: "Rudra",
    age: 25,
    address: {
        city: "Dhaka",
        country: "Bangladesh",
        home: "Dhaka",
    },
    isAuthentice: true,
}
