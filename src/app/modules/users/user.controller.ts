// create user

import httpStatus from 'http-status'
import catchAsync from '../../../shared/catchAsync'
import sendResponse from '../../../shared/sendResponse'
import { userService } from './user.service'

const createUser = catchAsync(async (req, res) => {
  const data = req.body
  const result = await userService.createUser(data)
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'user is created successfully',
    data: result,
  })
})


const getUsers = catchAsync(async (req, res) => {
    
    const result = await userService.getUsers()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'users are fetched successfully',
      data: result,
    })
  })


  const getUser = catchAsync(async (req, res) => {
    const {id}=req.params
    const result = await userService.getUser(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user is fetched successfully',
      data: result,
    })
  })

  const deleteUser = catchAsync(async (req, res) => {
    const {id}=req.params
    const result = await userService.deleteUser(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user is deleted successfully',
      data: result,
    })
  })

  const updateUser = catchAsync(async (req, res) => {
    const {id}=req.params
    const data=req.body
    const result = await userService.updateUser(id,data)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'user is updated successfully',
      data: result,
    })
  })

export const userController = { createUser,getUsers,getUser,deleteUser ,updateUser}
