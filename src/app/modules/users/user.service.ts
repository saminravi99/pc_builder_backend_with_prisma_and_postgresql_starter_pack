import { PrismaClient, Users } from '@prisma/client'

const prisma = new PrismaClient()

// create a user
const createUser = async (data: Users): Promise<Users> => {
  const result = await prisma.users.create({ data })
  return result
}


// get all user
const getUsers=async()=>{
  const result = await prisma.users.findMany()
  return result
}

// get aingle user
const getUser=async(id:string):Promise<Users |null>=>{
const result = await prisma.users.findUnique({
  where:{
    id:id
  }
})
return result
}

const deleteUser=async(id:string):Promise<Users |null>=>{
  const result = await prisma.users.delete({
    where:{
      id:id
    }
  })
  return result
  }



  const updateUser=async(id:string,data:Users):Promise<Users |null>=>{
    const result = await prisma.users.update({
      where:{
        id:id
      },
      data
    })
    return result
    }

export const userService = { createUser ,getUsers,getUser,deleteUser,updateUser}
