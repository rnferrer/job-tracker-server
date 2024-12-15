import { Router } from "express"

import { getAppliedJobs, createAppliedJob, deleteAppliedJob } from "../controllers/appliedJobController"

const router = Router()

router.get("/:userId", getAppliedJobs)
router.post("/", createAppliedJob)
router.delete("/:appliedJobId", deleteAppliedJob)
router.patch("/:appliedJobId")

export default router