"use strict";

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = require("nexus-di"),
    Injectable = _require.Injectable,
    SCOPES = _require.SCOPES;

var Katana = (_dec = Injectable({
  inject: [],
  scope: SCOPES.SINGLETON,
  provider: function provider(clazz, container) {
    return new clazz();
  }
}), _dec(_class = function Katana() {
  _classCallCheck(this, Katana);

  this.name = "katana";
}) || _class);
module.exports = Katana;