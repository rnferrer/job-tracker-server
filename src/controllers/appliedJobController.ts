import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAppliedJobs = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.userId);
  try {
    const jobs = await prisma.appliedJob.findMany({
      where:{
        userId
      }
    })
    res.json(jobs)
  } catch (error: any){
    res
      .status(500)
      .json({message: error})
  }
}

export const createAppliedJob = async (req: Request, res: Response): Promise<void> => {
  const {
    jobTitle,
    location,
    url,
    status,
    lastEdit,
    userId
  } = req.body;

  try {
    const newJob = await prisma.appliedJob.create({
      data:{
        jobTitle,
        location,
        url,
        status,
        lastEdit,
        userId
      }
    });
    res.json(newJob)
  } catch (error: any){
    res
      .status(500)
      .json({message: error});
  }
}

export const updateAppliedJob = async (req:Request, res: Response): Promise<void> => {
  const {
    jobTitle,
    location,
    url,
    status,
    lastEdit,
    id
  } = req.body;

  try {
    const updatedJob = await prisma.appliedJob.update({
      where:{
        id
      },
      data:{
        jobTitle,
        location,
        url,
        status,
        lastEdit
      }
    })
    res.json("Job has been updated")
  } catch (error: any){
    res
      .status(500)
      .json({message: error});
  }
}

export const deleteAppliedJob = async (req: Request, res: Response): Promise<void> => {
  const appliedJobId = parseInt(req.params.appliedJobId);
  try {
    const job = await prisma.appliedJob.delete({
      where:{
        id: appliedJobId
      }
    })
    res.json({message:"Deleted job"})
  } catch (error: any){
    res
      .status(500)
      .json({message: error})
  }
}