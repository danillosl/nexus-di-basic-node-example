const { container, SCOPES } = require("nexus-di");
const Katana = require("../src/weapons/Katana");
const Shuriken = require("../src/weapons/Shuriken");

container
  .register({ target: Katana, scope: SCOPES.SINGLETON })
  .register({ target: Shuriken, scope: SCOPES.PROTOTYPE })
  .registerObject({
    key: "SHIELD",
    provider: container => ({ name: "shield", armor: 15 }),
    scope: SCOPES.SINGLETON
  });

module.exports = container;
