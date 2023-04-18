class Client {
  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set balance(value) {
    this._balance = value;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const client1 = new Client('John', 'Doe', 1000);

console.log(client1.fullName()); // виведе "John Doe"
console.log(client1.balance); // виведе 1000

client1.balance = 500;

console.log(client1.balance); // виведе 500
