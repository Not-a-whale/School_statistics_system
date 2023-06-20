import express from "express";
import {
    getStudents, getStudentsGeography
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/geography", getStudentsGeography);

export default router;
