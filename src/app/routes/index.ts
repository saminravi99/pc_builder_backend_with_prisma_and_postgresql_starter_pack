/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express'
import { userRoutes } from '../modules/users/user.route'
import { categoriesRoutes } from '../modules/categories/categories.routes'
import { componentRoutes } from '../modules/components/components.routes'

const router = express.Router()

const moduleRoutes: any[] = [
  {
    path: '/users',
    route: userRoutes,
  },
  {
    path: '/categories',
    route: categoriesRoutes,
  },
  {
    path: '/components',
    route: componentRoutes,
  },
]

moduleRoutes.forEach(route => router.use(route.path, route.route))
export default router
