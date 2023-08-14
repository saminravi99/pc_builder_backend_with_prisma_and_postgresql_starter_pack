import express from 'express'
import { categoryController } from './categories.controller'
const router = express.Router()

router.post('/create-category', categoryController.createCategory)

export const categoriesRoutes = router
