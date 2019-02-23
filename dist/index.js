"use strict";

var _require = require("nexus-di"),
    container = _require.container;

var Battle = require("./Battle");

var battle = container.getInstance(Battle);
console.log(battle.fight());