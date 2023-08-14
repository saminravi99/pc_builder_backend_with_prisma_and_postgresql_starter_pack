import { Category, PrismaClient } from '@prisma/client'
import { IGenericResponse } from '../../../interfaces/common'

const prisma = new PrismaClient()

const createCategory = async (
  data: Category,
): Promise<IGenericResponse<Category>> => {
  const category = await prisma.category.create({
    data,
  })

  return {
    data: category,
  }
}

export const categoriesServices = {
  createCategory,
}
