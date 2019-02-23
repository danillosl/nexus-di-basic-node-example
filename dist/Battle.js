"use strict";

var _dec, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require("nexus-di"),
    Injectable = _require.Injectable,
    SCOPES = _require.SCOPES;

var Ninja = require("./warriors/Ninja");

var Samurai = require("./warriors/Samurai");

var Battle = (_dec = Injectable({
  inject: [Ninja, Samurai],
  scope: SCOPES.SINGLETON,
  provider: function provider(clazz, container) {
    return new clazz();
  }
}), _dec(_class =
/*#__PURE__*/
function () {
  function Battle() {
    _classCallCheck(this, Battle);
  }

  _createClass(Battle, [{
    key: "fight",
    value: function fight() {
      return "".concat(this.Samurai.toString(), " vs ").concat(this.Ninja.toString());
    }
  }]);

  return Battle;
}()) || _class);
module.exports = Battle;