let { Injectable, SCOPES } = require("nexus-di");

const Katana = require("../weapons/Katana");

@Injectable({
  inject: { weapon: Katana, shield: "SHIELD" },
  scope: SCOPES.SINGLETON
})
class Samurai {
  constructor() {
    this.name = "samurai";
  }

  toString() {
    return `${this.name} fighting with ${this.weapon.name} and ${
      this.shield.name
    } that gives ${this.shield.armor} points of armor`;
  }
}

module.exports = Samurai;
