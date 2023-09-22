class Account {

  id: number;
  name: string;
  balance: number;

  constructor(id: number, name: string, balance: number){
    this.id = id;
    this.name = name;
    this.balance = balance;
  }

  deposit(amount: number): void{
    if(amount <= 0) {
      throw new Error("invalid amount")
    } 
    this.balance +=  amount;
  }
}

let account = new Account(1, 'David', 0)

account.deposit(100);
console.log(typeof account);
console.log(account instanceof Account)