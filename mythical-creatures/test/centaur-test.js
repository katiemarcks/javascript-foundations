var assert = require("chai").assert;
var Centaur = require("../exercises/centaur");

describe("Centaur", function () {
  it("should be a function", function () {
    assert.isFunction(Centaur);
  });

  it("should have a name", function () {
    // instantiate a Centaur object with an object as an argument. The object should have a key of name and value of your name
    var centaur1 = new Centaur({ name: "Frank" });
    // instantiate another Centaur object with a different name
    var centaur2 = new Centaur({ name: "Louise" });
    // assert that the first centaur's name is your name
    assert.equal(centaur1.name, "Frank");
    // assert that the second centaur's name is the other name
    assert.equal(centaur2.name, "Louise");
    //NOTE: We will not ask you to write your own tests in a mod 1 assessment, but it is good practice to prepare for mod 2!
  });

  it.skip("should have a breed", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    assert.equal(centaur.breed, "Palomino");
  });

  it.skip("should have excellent bow skills", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    assert.equal(centaur.shootBow(), "Twang!!!");
  });

  it.skip("should have a horse sound when it runs", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    var soundEffect = centaur.run();

    assert.equal(soundEffect, "Clop clop clop clop!!!");
  });

  it.skip("should not be cranky when first created", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    assert.equal(centaur.cranky, false);
  });

  it.skip("should be standing up when first created", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    assert.equal(centaur.standing, true);
  });

  it.skip("should be cranky after running or shooting a bow three times", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    assert.equal(centaur.cranky, false);

    centaur.shootBow();
    centaur.run();
    centaur.shootBow();

    assert.equal(centaur.cranky, true);
  });

  it.skip("should be cranky after running or shooting a bow three times", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    assert.equal(centaur.cranky, false);

    centaur.run();
    centaur.run();
    centaur.shootBow();

    assert.equal(centaur.cranky, true);
  });

  it.skip("should not shoot when cranky", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    centaur.shootBow();
    centaur.shootBow();
    centaur.run();

    assert.equal(centaur.shootBow(), "NO!");
  });

  it.skip("should not run when cranky", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    centaur.shootBow();
    centaur.shootBow();
    centaur.shootBow();

    assert.equal(centaur.run(), "NO!");
  });

  it.skip("should not sleep while standing", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    assert.equal(centaur.sleep(), "NO!");
  });

  it.skip("after laying down it is not standing", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    assert.equal(centaur.standing, true);
    assert.equal(centaur.layingDown, false);

    centaur.layDown();

    assert.equal(centaur.standing, false);
    assert.equal(centaur.layingDown, true);

    centaur.standUp();

    assert.equal(centaur.standing, true);
    assert.equal(centaur.layingDown, false);
  });

  it.skip("should not run or shoot while laying down", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    centaur.layDown();

    assert.equal(centaur.shootBow(), "NO!");
    assert.equal(centaur.run(), "NO!");
  });

  it.skip("should be able to sleep when laying down", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    centaur.layDown();

    assert.equal(centaur.sleep(), "ZZZZ");
  });

  it.skip("should not be cranky after sleeping", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    centaur.run();
    centaur.run();
    centaur.run();

    assert.equal(centaur.cranky, true);

    centaur.layDown();
    centaur.sleep();

    assert.equal(centaur.cranky, false);

    centaur.standUp();

    assert.equal(centaur.shootBow(), "Twang!!!");
  });

  it.skip("should not be cranky after drinking potion", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    centaur.shootBow();
    centaur.run();
    centaur.shootBow();

    centaur.drinkPotion();

    assert.equal(centaur.cranky, false);
  });

  it.skip("should only drink potion while standing", function () {
    var centaur = new Centaur({ name: "Georgiana", type: "Palomino" });

    centaur.layDown();

    assert.equal(centaur.drinkPotion(), "Not while I'm laying down!");
  });
});
