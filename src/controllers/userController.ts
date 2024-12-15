import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const id = parseInt(req.params.userId)
  try {
    const user = await prisma.user.findUnique({
      where: {
        id
      }
    })
    res.json(user)
  } catch (error: any){
    res
      .status(500)
      .json({message: `Error retrieving user: ${error.message}`})
  }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
  const {
    email,
    username
  } = req.body
  try {
    const newUser = await prisma.user.create({
      data:{
        email,
        username
      }
    })
    console.log(`User ${username} has successfully been created`)
    res.json({message: "Successfully created user"})
  } catch (error: any){
    res
      .status(500)
      .json({message: `Error creating user: ${error.message}`})
  }
}