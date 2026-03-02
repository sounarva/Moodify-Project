const { Router } = require("express")
const { registerController, loginController, getMeController, logoutController } = require('../controllers/auth.controller')
const { authMiddleware } = require('../middlewares/auth.middleware')
const router = Router()

router.post("/register", registerController)
router.post("/login", loginController)
router.get("/get-me", authMiddleware, getMeController)
router.get("/logout", authMiddleware, logoutController)


module.exports = router
