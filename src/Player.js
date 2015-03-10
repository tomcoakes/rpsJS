var Player = function(name) {
  this.name = name;
  this.weapon = "";
  WEAPON_CHOICES = ["rock", "paper", "scissors"];
};

Player.prototype.chooseWeapon = function(weapon) {
  this.weapon = weapon;
};

Player.prototype.chooseRandomWeapon = function() {
  index = Math.floor(Math.random() * 3);
  this.weapon = WEAPON_CHOICES[index];
};