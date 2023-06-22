import express from "express";
import {
    getStudent,
    getStudents, getStudentsGeography
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/student/:id", getStudent);
router.get("/geography", getStudentsGeography);

export default router;
