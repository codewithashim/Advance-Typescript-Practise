const makePromiss = () : Promise<string>  => {
return  new Promise<string>((resolve, reject) => {
    const data: string = "Data is fetched ";
    if (data) {
      resolve(data);
    } else {
      reject("faild to fetch data");
    }
  });
};

const getPromiseData = async () : Promise<boolean> => {
    return new Promise<boolean>((resolve, reject) => {
        const data : boolean = true;

        if (data) {
            resolve(data);
        } else {
            reject(data);
        }
        
        
        
    })
}