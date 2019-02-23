const container = require("./containerConfig");

const Battle = require("./Battle");

const battle = container.getInstance(Battle);

console.log(battle.fight());
