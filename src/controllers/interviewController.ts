import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getInterviews = async (req: Request, res: Response): Promise<void> => {
  const appliedJobId  = parseInt(req.params.jobId,10)
  try {
    const interviews = await prisma.interview.findMany({
      where:{
        appliedJobId
      }
    })
  } catch (error: any){
    
  }
}

export const getAllInterviews = async (req: Request, res: Response): Promise<void> => {
  const userId  = parseInt(req.params.userId,10)
  try {
    const interviews = await prisma.interview.findMany({
      where:{
        userId
      }
    })
  } catch (error: any){
    
  }
}

export const createInterview = async (req: Request, res: Response): Promise<void> => {
  const {
    title,
    date,
    start,
    end,
    allDay,
    notes,
    appliedJobId,
    userId
  } = req.body;
  try {
    const newInterview = await prisma.interview.create({
      data: {
        title,
        date,
        start,
        end,
        allDay,
        notes,
        appliedJobId,
        userId
      }
    });
    res.status(201).json(newInterview)
  } catch (error:any) {

  }
}

export const updateInterview = async (req: Request, res: Response): Promise<void> => {
  const {
    title,
    date,
    start,
    end,
    allDay,
    notes,
    appliedJobId,
    userId
  } = req.body;
  try {
    const updatedInterview = await prisma.interview.create({
      data: {
        title,
        date,
        start,
        end,
        allDay,
        notes,
        appliedJobId,
        userId
      }
    });
    res.status(201).json(updatedInterview)
  } catch (error:any) {

  }
}