const router = require('express').Router();
const controller = require("../controller");


// 像数据库添加数据
router.post("/kiwisec/register", controller.API.register);
router.post("/kiwisec/login", controller.API.login);
router.post("/kiwisec/updatePassword", controller.API.updatePassword);

module.exports = router;