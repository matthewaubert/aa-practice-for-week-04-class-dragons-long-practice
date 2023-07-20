const Dragon = require("./dragon");

class EvilDragon extends Dragon {
  // constructor function; input: name, color, evilDoings, nemesis
  constructor (name, color, evilDoings, nemesis) {
    super(name, color); // super function; input: name, color
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }

  // instance method "dontInviteThemOverForDinner()"
  dontInviteThemOverForDinner() {
    // console.log each of instance's evil doings separately
    this.evilDoings.forEach(evilDoing => console.log(`${this.name} will ${evilDoing}`));
  }
  // instance method "burnsNemesis()"
  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`
  }
}



/********************************** TESTS **********************************/
// const enderDragon = new EvilDragon(
//   "Ender Dragon",
//   "black", [
//     "spit a fireball at Steve",
//     "rule over all the Endermen",
//     "destroy all blocks in its way"
//   ],
//   "Steve"
// );
// console.log(enderDragon);
// enderDragon.dontInviteThemOverForDinner();
// console.log(enderDragon.breathesFire());
// console.log(enderDragon.burnsNemesis());

/* Expected output:
EvilDragon {
  name: 'Ender Dragon',
  color: 'black',
  evilDoings: [
    'spit a fireball at Steve',
    'rule over all the Endermen',
    'destroy all blocks in its way'
  ],
  nemesis: 'Steve'
}
Ender Dragon will spit a fireball at Steve
Ender Dragon will rule over all the Endermen
Ender Dragon will destroy all blocks in its way
Ender Dragon breathes fire everywhere! BURN!!!!
Ender Dragon destroys Steve with fire! WHOOOSH!!!
*/


// const drogon = new EvilDragon(
//   "Drogon",
//   "black-red",
//   [
//     "eat all your livestock",
//     "burn down your castle in Westeros",
//     "burn your father and brother"
//   ],
//   "Night King"
// );
// console.log(drogon);
// drogon.dontInviteThemOverForDinner();
// console.log(drogon.breathesFire());
// console.log(drogon.burnsNemesis());

/* Expected output:
EvilDragon {
  name: 'Drogon',
  color: 'black-red',
  evilDoings: [
    'eat all your livestock',
    'burn down your castle in Westeros',
    'burn your father and brother'
  ],
  nemesis: 'Night King'
}
Drogon will eat all your livestock
Drogon will burn down your castle in Westeros
Drogon will burn your father and brother
Drogon breathes fire everywhere! BURN!!!!
Drogon destroys Night King with fire! WHOOOSH!!!
*/



/********************************** EXPORT **********************************/
module.exports = EvilDragon;