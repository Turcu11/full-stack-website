import { sequelize } from "./db.js";

sequelize.sync({ force: true }).then(() => {
  console.log("Sync finished");
  process.exit();
});
