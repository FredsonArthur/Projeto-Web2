const { Router } = require("express");
const { RegisterController } = require("./register");

const router = Router();

/** Employee External */
router.post("/register", RegisterController);

/** Test routes */
router.get("/test", (req, res) => {
  res.send("Employee is working!");
});

module.exports = {
  EmployeeRoutes: router,
};
