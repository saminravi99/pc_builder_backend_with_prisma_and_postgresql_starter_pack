import { RequestHandler } from 'express'
import catchAsync from '../../../shared/catchAsync'
import { categoriesServices } from './categories.service'
import httpStatus from 'http-status'
import sendResponse from '../../../shared/sendResponse'

const createCategory: RequestHandler = catchAsync(async (req, res) => {
  const data = req.body
  const result = await categoriesServices.createCategory(data)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'category is created successfully',
    data: result,
  })
})

export const categoryController = {
  createCategory,
}
