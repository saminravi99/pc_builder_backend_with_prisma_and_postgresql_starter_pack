import express from "express"
import { userController } from "./user.controller"
const router = express.Router()

router.post("/create-user",userController.createUser)
router.get("/",userController.getUsers)
router.get("/:id",userController.getUser)
router.delete("/:id",userController.deleteUser)
router.patch("/:id",userController.updateUser)



export const userRoutes = router