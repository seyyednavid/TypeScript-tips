"use strict";
class Account {
    constructor(id, name, balance) {
        this.id = id;
        this.name = name;
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("invalid amount");
        }
        this.balance += amount;
    }
}
let account = new Account(1, 'David', 0);
account.deposit(100);
console.log(typeof account);
console.log(account instanceof Account);
//# sourceMappingURL=index.js.map