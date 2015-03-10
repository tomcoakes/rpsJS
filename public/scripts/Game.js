var Game = function() {
  this.players = [];
  BEATEN_BY = {"scissors" : "paper", "rock" : "scissors", "paper" : "rock"};
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
  if(this.players[0].weapon === this.players[1].weapon) {
    return "Draw";
  } else if (this.players[0].weapon === BEATEN_BY[this.players[1].weapon]) {
    return this.players[1].name;
  } else {
    return this.players[0].name;
  }
};