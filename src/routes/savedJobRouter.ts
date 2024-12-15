import { Router } from "express"

import { 
  getSavedJobs, 
  createSavedJob, 
  deleteSavedJob 
} from "../controllers/savedJobController"

const router = Router()

router.get("/:userId", getSavedJobs)
router.post("/", createSavedJob)
router.delete("/:savedJobId", deleteSavedJob)

export default router