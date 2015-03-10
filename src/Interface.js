var game = new Game();

$("#submit").click(function() {
  ( name = $("input:first" ).val());
  addPlayer();
  displayChoices();
  hideNameInput();
});

displayChoices = function() {
  $("#playername").text(playerOne.name);
  $("#weapon_choice").css("visibility", "visible");
};

hideNameInput = function() {
  $("#name_input").css("visibility", "hidden");
};

addPlayer = function() {
  playerOne = new Player(name);
  game.addPlayer(playerOne);
};