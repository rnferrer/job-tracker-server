import { Router } from "express"
import { 
  getAllInterviews, 
  getInterviews, 
  createInterview, 
  updateInterview, 
  deleteInterview 
} from "../controllers/interviewController"

const router = Router()

router.get("/:jobId", getInterviews)
//May need to rename route to be more intuitive
router.get("/user/:userId", getAllInterviews)
router.post("/", createInterview)
router.put("/:interviewId", updateInterview)
router.delete("/:interviewId", deleteInterview)

export default router