var Player = function(name) {
  this.name = name;
  this.weapon = "";
};

Player.prototype.chooseWeapon = function(weapon) {
  this.weapon = weapon;
};