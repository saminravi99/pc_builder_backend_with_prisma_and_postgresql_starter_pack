/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, PrismaClient } from '@prisma/client'
import { IGenericResponse } from '../../../interfaces/common'
import { componentsSearchableField } from './components.constant'
import { paginationHelpers } from '../../../helpers/paginationHelper'

const prisma = new PrismaClient()

const createComponent = async (
  data: Component,
): Promise<IGenericResponse<Component>> => {
  const component = await prisma.component.create({
    data,
  })

  return {
    data: component,
  }
}

const getComponents = async (
  filters: any,
  paginationOptions: any,
): Promise<IGenericResponse<Partial<Component>[]>> => {
  const { searchTerm, ...filtersData } = filters

  const { page, limit, sortBy, sortOrder, skip } =
    paginationHelpers.calculatePagination(paginationOptions)

  const andConditions = []

  if (searchTerm) {
    andConditions.push({
      OR: componentsSearchableField.map(field => ({
        [field]: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      })),
    })
  }
//filtersData = { brand: 'Intel', model: 'i5' }
//filterKeys = ['brand', 'model']
  if (filtersData) {
    const filterKeys = Object.keys(filtersData)

    filterKeys.forEach(key => {
      andConditions.push({
        [key]: {
          equals: filtersData[key],
        },
      })
    })
  }

  const orderBy: any = {}

  if (sortBy && sortOrder) {
    orderBy[sortBy] = sortOrder
  }

  const components = await prisma.component.findMany({
    orderBy,
    take: limit,
    skip,
    where: {
      AND: andConditions,
    },
  })

    // where: {
    //   AND: [
    //     {
    //       OR: [
    //         {
    //           brand: {
    //             contains: 'Intel',
    //             mode: 'insensitive',
    //           },
    //         },
    //         {
    //           model: {
    //             contains: 'i5',
    //           },
    //         },
    //       ],
    //     },
    //     {
    //       brand: {
    //         equals: 'Intel',
    //       },
    //     },
    //     {
    //       model: {
    //         equals: 'i5',
    //       },
    //     },
    //   ]
    // }

  const total = await prisma.component.count()

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: components,
  }
}

export const componentsServices = {
  createComponent,
  getComponents,
}
