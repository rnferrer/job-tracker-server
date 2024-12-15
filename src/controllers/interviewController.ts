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
    res.json(interviews)
  } catch (error: any){
    res
      .status(500)
      .json({message: error});
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
    res.send(interviews)
  } catch (error: any){
    res
      .status(500)
      .json({message: error});
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
    res
      .status(500)
      .json({message: error});
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
    res
      .status(500)
      .json({message: error});
  }
}

export const deleteInterview = async (req: Request, res: Response): Promise<void> => {
  const interviewId = parseInt(req.params.interviewId);
  try {
    const job = await prisma.appliedJob.delete({
      where:{
        id: interviewId
      }
    })
    res.json({message:"Deleted job"})
  } catch (error: any){
    res
      .status(500)
      .json({message: error})
  }
}