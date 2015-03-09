describe("Player", function() {

  it("has a name given on initialisation", function() {
    var player = new Player("Tom");
    expect(player.name).toBe("Tom");
  });

  it("can choose a weapon", function() {
    var player = new Player("Tom");
    player.chooseWeapon("rock");
    expect(player.weapon).toBe("rock");
  });

});