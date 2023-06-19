import express from "express";
import {getAverageMarks} from "../controllers/marksController.js";

const router = express.Router();

router.get("/avgMarks", getAverageMarks);
export default router;
