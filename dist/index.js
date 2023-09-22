"use strict";
class Account {
    constructor(id, name, _balance, nickname) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
        this.nickname = nickname;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("invalid amount");
        }
        this._balance += amount;
    }
    getBalance() {
        return this._balance;
    }
}
let account = new Account(1, "David", 0);
console.log(account.getBalance());
//# sourceMappingURL=index.js.map