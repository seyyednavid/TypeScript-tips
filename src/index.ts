// The second way for work with private properties and methods
// Getter and Setter

class Account {
  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number,
    public nickname?: string
  ) {}

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("invalid amount");
    }
    this._balance += amount;
  }

  get balance(): number {
    // with adding get we can read balance property indirectly console.log(account.balance)
    return this._balance;
  }
  set balance(value: number) {
    // with adding set we can set balance property's value indirectly => account.balance = 1
    if (value < 0) throw new Error("Invalid value");
    this._balance = value;
  }

  private calculateTax() {}
}

let account = new Account(1, "David", 0);
console.log(account.balance); // get
account.balance = 1; //set

// in total we do not need setter , because there is no reason to user be able to change the balance value
