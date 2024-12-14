import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { userId } = req.params
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: 1
      }
    })
  } catch (error: any){
    res
      .status(500)
      .json({message: `Error retrieving user: ${error.message}`})
  }
}

export const postUser = async (req: Request, res: Response): Promise<void> => {
  try {

  } catch (error: any){
    
  }
}