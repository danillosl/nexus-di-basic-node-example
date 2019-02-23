const { Injectable, SCOPES } = require("nexus-di");

const Shuriken = require("../weapons/Shuriken");

@Injectable({
  inject: { weapon: Shuriken, shield: "SHIELD" },
  scope: SCOPES.SINGLETON
})
class Ninja {
  constructor() {
    this.name = "ninja";
  }

  toString() {
    return `${this.name} fighting with ${this.weapon.name} and ${
      this.shield.name
    } that gives ${this.shield.armor} points of armor`;
  }
}

module.exports = Ninja;
