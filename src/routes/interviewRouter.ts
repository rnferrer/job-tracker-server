import { Router } from "express"

const router = Router()

router.get("/:jobId")
//May need to rename route to be more intuitive
router.get("/user/:userId")
router.post("/")
router.put("/:interviewId")

export default router