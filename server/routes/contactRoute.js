import express from "express";
import { createEntry } from "../controller/contactController.js";

const router = express.Router();

router.route("/contact").post(createEntry)

export default router;