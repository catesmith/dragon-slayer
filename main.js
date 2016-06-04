(function() {
var myHealth = 10;
var dragonHealth = 10;
var slaying = true;
var youHit = Math.floor(Math.random() * 2);
var dragonHit = Math.floor(Math.random() * 2);
var yourDmg = Math.floor(Math.random() * 4 + 1);
var dragonDmg = Math.floor(Math.random() * 6 + 1);
while (slaying) {
  if (youHit >= 1) {
    console.log("You hit the dragon.");
    dragonHealth -= yourDmg;
    if (dragonHealth <= 0) {
      console.log("You killed it!");
      slaying = false;
    } else {
      console.log("Dragon health: " + dragonHealth);
    }
  } else {
    console.log("You missed.");
  }
  if (dragonHealth > 0) {
    if (dragonHit >= 1) {
      console.log("The dragon hit you.");
      myHealth -= dragonDmg;
      if (myHealth <= 0) {
        console.log("You are dead.");
        slaying = false;
      } else {
        console.log("Your health: " + myHealth);
      }
    } else {
      console.log("The dragon missed you.");
    }
  }
  youHit = Math.floor(Math.random() * 2);
  dragonHit = Math.floor(Math.random() * 2);
  yourDmg = Math.floor(Math.random() * 4 + 1);
  dragonDmg = Math.floor(Math.random() * 6 + 1);
}
})();
