describe("Game Logic", function() {

  beforeEach(function() {
    game = new Game();
    playerOne = new Player("Tom");
    playerTwo = new Player("Petra");
  });

  it("can add a player", function() {
    game.addPlayer(playerOne);
    expect(game.playerCount()).toEqual(1);
  });

  it("can add two players", function() {
    game.addPlayer(playerOne);
    game.addPlayer(playerTwo);
    expect(game.playerCount()).toEqual(2);
  });

  it("throws an error when a third player tries to enter", function() {
    playerThree = jasmine.createSpy('Player');
    game.addPlayer(playerOne);
    game.addPlayer(playerTwo);
    expect(function() {
      game.addPlayer(playerThree);
    }).toThrow(new Error("Only two people can play at a time"));
  });

  it("declares a draw when playerOne and playerTwo both choose 'paper'", function() {
    game.addPlayer(playerOne);
    game.addPlayer(playerTwo);
    playerOne.chooseWeapon("paper");
    playerTwo.chooseWeapon("paper");
    expect(game.winner()).toBe("Draw");
  });

  it("declares that playerOne wins when they choose rock and playerTwo chooses scissors", function() {
    game.addPlayer(playerOne);
    game.addPlayer(playerTwo);
    playerOne.chooseWeapon("rock");
    playerTwo.chooseWeapon("scissors");
    expect(game.winner()).toBe("Tom");
  });

  it("declares that playerTwo wins when they choose paper and playerOne chooses rock", function() {
    game.addPlayer(playerOne);
    game.addPlayer(playerTwo);
    playerOne.chooseWeapon("rock");
    playerTwo.chooseWeapon("paper");
    expect(game.winner()).toBe("Petra");    
  });

});