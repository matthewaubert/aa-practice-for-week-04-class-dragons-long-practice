const Dragon = require("./classes/dragon");
const FriendlyDragon = require("./classes/friendly-dragon");
const EvilDragon = require("./classes/evil-dragon");

const falkor = new FriendlyDragon(
  "Falkor",
  "white",
  [
    "save Atreyu from the swamp",
    "save Atreyu from the Nothing",
    "scare the local bullies into a dumpster"
  ],
  "Bastian"
);

const smaug = new EvilDragon(
  "Smaug",
  "black",
  [
    "take over your mountain kingdom",
    "steal all your dwarven gold",
    "burn down your floating village"
  ],
  "Dwarf King"
);

const allDragons = Dragon.getDragons(falkor, smaug); // [ 'Falkor', 'Smaug' ]



/********************************** TESTS **********************************/
// console.log(falkor);
// falkor.hasLifeGoals();
// console.log(falkor.breathesFire());
// console.log(falkor.helpsPeople());

/* Expected output:
FriendlyDragon {
  name: 'Falkor',
  color: 'white',
  lifeGoals: [
    'save Atreyu from the swamp',
    'save Atreyu from the Nothing',
    'scare the local bullies into a dumpster'
  ],
  friend: 'Bastian'
}
Falkor likes to save Atreyu from the swamp
Falkor likes to save Atreyu from the Nothing
Falkor likes to scare the local bullies into a dumpster
Falkor breathes fire everywhere! BURN!!!!
Falkor helps their friend Bastian
*/


// console.log(smaug);
// smaug.dontInviteThemOverForDinner();
// console.log(smaug.breathesFire());
// console.log(smaug.burnsNemesis());

/* Expected output:
EvilDragon {
  name: 'Smaug',
  color: 'black',
  evilDoings: [
    'take over your mountain kingdom',
    'steal all your dwarven gold',
    'burn down your floating village'
  ],
  nemesis: 'Dwarf King'
}
Smaug will take over your mountain kingdom
Smaug will steal all your dwarven gold
Smaug will burn down your floating village
Smaug breathes fire everywhere! BURN!!!!
Smaug destroys Dwarf King with fire! WHOOOSH!!!
*/



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports.falkor = falkor;
  module.exports.smaug = smaug;
  module.exports.allDragons = allDragons;
} catch {
  module.exports = null;
}