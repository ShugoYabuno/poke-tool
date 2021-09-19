"use strict"

import { Router } from "express"
import admin from "./data"

const router = Router()

router.use("/data", admin)

/**
 * Routing.
 */
export default router
