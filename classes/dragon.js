class Dragon {
  // constructor func; input: name, color
  constructor (name, color) {
    this.name = name;
    this.color = color;
  }

  // instance method "breathesFire"; input: none; output: return a string
  breathesFire() {
    return `${this.name} breathes fire everywhere! BURN!!!!`
  }

  // static method "getDragons"; input: any number of Dragon instances;
  static getDragons(...dragons) {
    // return: array of all dragon names from passed-in instances
    return dragons.map(dragon => dragon.name);
  }
}

/********************************** TESTS **********************************/
// const puff = new Dragon("Puff", "green");
// console.log(puff); // Dragon { name: 'Puff', color: 'green' }
// console.log(puff.breathesFire()); // Puff breathes fire everywhere! BURN!!!!

// const toothless = new Dragon("Toothless", "black");
// console.log(toothless); // Dragon { name: 'Toothless', color: 'black' }
// console.log(toothless.breathesFire()); // Toothless breathes fire everywhere! BURN!!!!

const puff = new Dragon("Puff", "green");
const toothless = new Dragon("Toothless", "black");
console.log(Dragon.getDragons(puff, toothless)); // [ 'Puff', 'Toothless' ]

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Dragon;
} catch {
  module.exports = null;
}