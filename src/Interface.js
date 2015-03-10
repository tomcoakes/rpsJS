var game = new Game();
var computer = new Player("The Computer");
game.addPlayer(computer);

$(document).ready(function() {

  $("form").submit(function(e) {
    ( name = $( "input:first" ).val());
    addPlayer();
    displayChoices();
    hideNameInput();
    e.preventDefault();
  });

  $("#rock").click(function() {
    playerOne.chooseWeapon("rock");
    computer.chooseRandomWeapon();
    declareWinner();
  });

  $("#paper").click(function() {
    playerOne.chooseWeapon("paper");
    computer.chooseRandomWeapon();
    declareWinner();
  });

  $("#scissors").click(function() {
    playerOne.chooseWeapon("scissors");
    computer.chooseRandomWeapon();
    declareWinner();
  });


  declareWinner = function() {
    if(game.winner() === "Draw") {
      $("#winner").text("Nobody won, it was a draw.");
    } else if(game.winner() === "The Computer") {
      $("#winner").text("Sorry pal, you were beaten this time. The computer chose "+computer.weapon+".");
    } else {
      $("#winner").text("Way to go "+playerOne.name+"! The computer chose "+computer.weapon+" so you're the winner!");
    }
  };

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

});