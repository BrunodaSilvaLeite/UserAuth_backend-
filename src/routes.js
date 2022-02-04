const express = require('express');
const router = express.Router();
const CreateUserController = require("./controller/CreateUserController");
const AuthenticationUserController = require("./controller/AuthenticationUserController");
const ensureAuthenticated = require("./middlewares/ensureAuthenticated")
//routes
router.post('/create', CreateUserController.handle);
router.post('/auth', AuthenticationUserController.handle);

module.exports = router;