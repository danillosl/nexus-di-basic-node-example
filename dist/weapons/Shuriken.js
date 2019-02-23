"use strict";

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require("nexus-di"),
    Injectable = _require.Injectable,
    SCOPES = _require.SCOPES;

var Shuriken = (_dec = Injectable({
  inject: [],
  scope: SCOPES.SINGLETON,
  provider: function provider(clazz, container) {
    return new clazz();
  }
}), _dec(_class = function Shuriken() {
  _classCallCheck(this, Shuriken);

  this.name = "shuriken";
}) || _class);
module.exports = Shuriken;