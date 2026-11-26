const express = require("express");
const userController = require("../controllers/user-controller");

const router = express.Router();

router.get("/:userId", userController.getUserById);
router.get("/", userController.getAllUsers);
router.post("/", userController.addUser);

module.exports = router;
