import { componentController } from './components.controller'
import express from 'express'
const router = express.Router()

router.post('/create-component', componentController.createComponent)
router.get('/', componentController.getComponents)

export const componentRoutes = router
