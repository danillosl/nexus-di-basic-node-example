const { Injectable, SCOPES } = require("nexus-di");

const Ninja = require("./warriors/Ninja");
const Samurai = require("./warriors/Samurai");

@Injectable({
  inject: { firstWarrior: Ninja, secondWarrior: Samurai },
  scope: SCOPES.SINGLETON
})
class Battle {
  fight() {
    return `${this.firstWarrior.toString()}\n vs \n${this.secondWarrior.toString()}`;
  }
}

module.exports = Battle;
