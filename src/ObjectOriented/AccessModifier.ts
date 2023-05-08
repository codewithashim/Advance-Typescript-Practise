class BankAccount {
  public id: number;
  public name: string;
  private _balance: number;

  constructor(id: number, name: string, balance: number) {
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  getBalance(): number {
    console.log(`Account balance is ${this._balance}`);
    return this._balance;
  }

  addDeposit(amount: number): void {
    this._balance += amount;
    console.log(`Deposit ${amount} successfully`);
  }
}

class studentAccount extends BankAccount {
  constructor(id: number, name: string, balance: number) {
    super(id, name, balance);
  }
}

const myAccount = new BankAccount(1, "John", 1000);
console.log(myAccount);
