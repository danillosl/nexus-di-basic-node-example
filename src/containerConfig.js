const { container, SCOPES } = require("nexus-di");
const Katana = require("../src/weapons/Katana");
const Shuriken = require("../src/weapons/Shuriken");

container
  .register(Katana, { scope: SCOPES.SINGLETON })
  .register(Shuriken, { scope: SCOPES.PROTOTYPE })
  .registerObject({
    key: "SHIELD",
    provider: container => ({ name: "shield", armor: 15 }),
    scope: SCOPES.SINGLETON
  });

module.exports = container;
