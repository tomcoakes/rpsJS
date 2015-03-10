var Game = function() {
  this.players = [];
};

Game.prototype.addPlayer = function(player) {
  this.players.push(player);
};

Game.prototype.playerCount = function() {
  return this.players.length;
};