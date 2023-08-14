import { RequestHandler } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { componentsServices } from './components.service'
import sendResponse from '../../../shared/sendResponse'
import httpStatus from 'http-status'
import pick from '../../../shared/pick'

const createComponent: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body
  const result = await componentsServices.createComponent(data)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'component is created successfully',
    data: result,
  })
})

const getComponents: RequestHandler = catchAsync(async (req, res) => {
  const filters = pick(req.query, ['searchTerm', 'brand', 'model', 'category'])
  const paginationOptions = pick(req.query, [
    'page',
    'limit',
    'sortBy',
    'sortOrder',
  ])
  const result = await componentsServices.getComponents(
    filters,
    paginationOptions,
  )
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'component is fetched successfully',
    data: result.data,
    meta: result.meta,
  })
})

export const componentController = {
  createComponent,
  getComponents,
}
