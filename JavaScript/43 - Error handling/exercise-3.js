class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    if (amount < 0) {
      throw new NegativeAmountError("The amount provided cannot be negative"); // Use custom Error class
    }

    this.#amount += amount;
  }

  withdraw(amount) {
    if (amount < 0) {
      throw new WithdrawNotPermittedError(
        "The amount provided cannot be negative"
      ); // Use custom Error class
    }

    if (this.#amount < amount) {
      throw new WithdrawNotPermittedError(
        "You cannot withdraw more than account balance"
      ); // Use custom Error class
    }

    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }
}

class NegativeAmountError extends Error {
  constructor(operation) {
    super(operation);
    this.Error = "Negative Amount";
  }
}

class WithdrawNotPermittedError extends Error {
  constructor(operation) {
    super(operation);
    this.Error = "Insufficient Amount";
  }
}

try {
  const bankAccount = new BankAccount(1000);
  bankAccount.deposit(500);
  bankAccount.deposit(200);
  bankAccount.withdraw(10000);
  bankAccount.view();
} catch (e) {
  console.log("Something went wrong during bank account operations");
}