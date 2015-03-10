describe("Game Logic", function() {

  it("can add a player", function() {
    var game = new Game();
    var player = jasmine.createSpy('player');
    game.addPlayer(player);
    expect(game.playerCount()).toEqual(1);
  });



});