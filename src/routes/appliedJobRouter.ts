import { Router } from "express"

import { 
  getAppliedJobs, 
  createAppliedJob, 
  updateAppliedJob, 
  deleteAppliedJob 
} from "../controllers/appliedJobController"

const router = Router()

router.get("/:userId", getAppliedJobs)
router.post("/", createAppliedJob)
router.delete("/:appliedJobId", deleteAppliedJob)
router.put("/", updateAppliedJob)

export default router