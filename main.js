
alert("To play this game type in the opitions given click ok to start the game")
const playerName = prompt("Enter your character name:").toLowerCase();
const playerClass = prompt("Choose your Class\nWarrior\nRanger\nMage").toLowerCase();
let quest = prompt("You walk up to the local quest board in the town of Varrock. There is two opitions Slay a dragon or go help a town being raided by bandits\nDragon Quest type 1 \n Bandits Quest type 2");
let playerStrength;
let playerWeapon;
let playerAlive;
let inventory;
let choice;
let dragAttack
playerStrength = parseInt(playerStrength);


if (playerClass == "mage") {
  playerStrength = 3;
  playerWeapon = "staff"

}

if (playerClass == "ranger") {
  playerStrength = 6;
  playerWeapon = "bow"

}

if (playerClass == "warrior") {
  playerStrength = 9;
  playerWeapon = "sword"

}

if (quest === "1") {
  prompt("You have chosen to try and slay the dragon in the cave to the north to proceed on this quest type: yes").toLowerCase();
  quest = "yes"
}

if (quest == "yes") {
  alert("You are walking down the road towards the dragons lair, you look up seeing the tip of the mountaion appear on the horizion, A rustle happens in the bush beside you its a huge bear what do you do Attack or Run?")
  choice = prompt("what do you do? attack or run").toLowerCase();
}

if (choice == "attack") {
  if (playerStrength > 5) {
    if (playerWeapon == "sword") {
      alert("You Swing your Sword with all your might cutting the beast in half");
      playerAlive = true;
    }
    if (playerWeapon == "bow") {
      alert("You draw an Arrow from you quiver and quickly place an arrow between the bears eyes killing it instantly")
      playerAlive = true;

    }
  }
  else {
    alert("you died what did you expect choosing a mage")
    playerAlive = false;
  }
}

if (choice == "run") {
  alert("You slip in your attempt to run from the bear and basically the revenent happens but you dont make it out alive");
  playerAlive = false;
}

if (playerAlive == true) {
  alert("you continue along the road for the rest of the day getting closer and closer to the mountain you notice how much warmer it has gotten and you must still be 20 miles from the mountain")
  alert("You see a man that has been pinned by his overturned wagon do you help him or leave him?")
  choice = prompt("help or leave").toLowerCase();
}

if (choice == "help") {
  if (playerStrength > 7) {
    alert("you lift the wagon off the man using almost all your strength to do so")
    alert("The man thanks you, you however realise his whole lower body is actaully crushed, you have seen people die from less serious wounds you decide to end it for him depsite his pleading cries you drive your sword through the mans heart ending his suffering")
    choice = "leave";
  }
  else {
    alert("you are not strong enough to lift the wagon off the man he asks you to go get help you know that is not a choice you unsheate an arrow and put an end to his misery")
    choice = "leave";
  }

}

if (choice == "leave") {
  alert("you carry on down the road leaving the man behind")
  alert("as you carry on down the road you notice how fatiqued you are and decide to set up camp for the night")
  alert("you sleep till the next morning with the massive mountain looming over you today is the day you attempt to slay the dragon")
  choice = prompt("Do you wish to continue yes or no").toLowerCase();
}

if (choice == "yes") {
  alert("You start the final strech of the journey heading towards the mountain upon approach you see some whelps of the dragon do you attack them or avoid them?")
  choice = prompt("Attack or Avoid").toLowerCase();
}
if (choice == "no") {
  alert("You turn back to the town")
}
if (choice == "attack") {
  if (playerWeapon == "sword") {
    alert("You charge into the whelpings, with a whirlwind of steel they fall to the ground in a flash of red");
    choice = "push"
  }
  if (playerWeapon == "bow") {
    alert("With a quick flurry of arrows all the whelpings fell to the ground");
    choice = "push"
  }

}
if (choice == "avoid") {
  alert("you sneak around the whelplings with ease")
  choice = "push"

}

if (choice == "push") {
  alert("you make your way to the entrance of the dragons lair heat radiating from the cave inside, as you make your way inside you see the beast of pure fire and ash")
  choice = prompt("Attack or Run").toLocaleLowerCase()
}

if (choice == "attack") {
  if (playerWeapon == "sword") {
    alert("YOU CHARGE AT THE DRAGON WITH A BLOODCURDLING ROAR YOU FEEL THAT IS ATTACK IS THE ROLL OF THE DICE WITH THE ODDS AGAINST YOU")
    dragAttack = Math.floor(Math.random() * 10)
  }
  if (playerWeapon == "bow") {
    alert("YOU SEND OFF YOUR BLACK ARROWS RUMORED TO HAVE THE ABILITY TO BRING A DRAGON DOWN YOU FIRE THE ARROWS ITS IN THE HANDS OF FATE NOW")
    dragAttack = Math.floor(Math.random() * 10)
  }
  if (dragAttack > 6) {
    alert("You slay the dragon with your reckless attack THE QUEST IS COMPLETE")
  }
  else {
    alert("Your atttacks ding off the Dragon it turns to you and melts you on the spot YOU ARE DEAD")
  }

}



if (quest === "2") {

  alert("You got to set off on your quest and are run over by  horse and carridge killing you instanly")

}


