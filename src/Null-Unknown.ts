const serchName = (value: string | null) => {
  if (value === null) {
    console.log("No Value");
  } else {
    console.log("Serch Value");
  }
};

serchName("Rudra");

const getMyCarSpeed = (speed: unknown) => {
  if (typeof speed === "number") {
    const convertd = (speed * 1000) / 3000;

    console.log(convertd);
  }

  if (typeof speed === "string") {
    const [value, unit] = speed.split(" ");
    const convertd = (parseFloat(value) * 1000) / 3000;
    console.log(convertd);
  } else{
    console.log('No Value')
  }
};


function throwError(message: string): never {
  throw new Error(message);
}

throwError("Error Occured");




getMyCarSpeed(50);
