class Account {

  readonly id: number; // No changes
  name: string;
  nickname ?: string; //Optional
  private _balance: number;  // Private


  constructor(id: number, name: string, balance: number){
    this.id = id;
    this.name = name;
    this._balance = balance;
  }

  deposit(amount: number): void{
    if(amount <= 0) {
      throw new Error("invalid amount")
    } 
    this._balance +=  amount;
  }

  getBalance(): number {
    return this._balance
  }

  private _calculateTax(_balance: number): number{ // Private
    return (_balance * 20) / 100;
  }
  
}

let account = new Account(1, 'David', 0)
console.log(account.getBalance());



//Access modifier
// public - private(only accessable within class) - protected