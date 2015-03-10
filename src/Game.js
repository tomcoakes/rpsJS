var Game = function() {
  this.players = [];
};

Game.prototype.addPlayer = function(player) {
  if(this.playerCount() >= 2) {
    throw new Error("Only two people can play at a time");
  } else {
    this.players.push(player);
  }
};

Game.prototype.playerCount = function() {
  return this.players.length;
};

Game.prototype.winner = function() {
  return "Draw";
};