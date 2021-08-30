/**
 * * INFORMATION:
 * ! Sock color -> Natural Int
 * ! Pile of Sock -> Array of integers
 * *
 */

class Rabbit {
  constructor(type) {
    this.type = type;
  }
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
}

let blackRabbit = new Rabbit("Black");

blackRabbit.speak("Mamaguevo");

Rabbit.prototype.teeth = "small";

// console.log(blackRabbit.teeth);

blackRabbit.teeth = "mamaguevo";

// console.log(blackRabbit.teeth);

delete blackRabbit.teeth;

// console.log(blackRabbit.teeth);

let teeth = Symbol("teeth");

blackRabbit[teeth] = "big";

console.log(blackRabbit[teeth]);

console.log(blackRabbit.teeth);
