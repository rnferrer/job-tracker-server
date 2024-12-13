import { Router } from "express"

const router = Router()

router.get("/:userId")
router.post("/")
router.delete("/:appliedJobId")
router.patch("/:appliedJobId")

export default router