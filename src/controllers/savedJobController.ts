import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getSavedJobs = async (req: Request, res: Response): Promise<void> => {
  const userId = parseInt(req.params.userId);
  try {
    const jobs = await prisma.savedJob.findMany({
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

export const createSavedJob = async (req: Request, res: Response): Promise<void> => {
  const {
    job_title,
    location,
    url,
    company_name,
    save_date,
    userId
  } = req.body;

  try {
    const newJob = await prisma.savedJob.create({
      data:{
        job_title,
        location,
        url,
        company_name,
        save_date,
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

export const deleteSavedJob = async (req: Request, res: Response): Promise<void> => {
  const savedJobId = parseInt(req.params.savedJobId);
  try {
    const job = await prisma.savedJob.delete({
      where:{
        id: savedJobId
      }
    })
    res.json({message:"Deleted job"})
  } catch (error: any){
    res
      .status(500)
      .json({message: error})
  }
}