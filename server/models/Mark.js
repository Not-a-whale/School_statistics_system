import mongoose from "mongoose";
import {faker} from "@faker-js/faker";

const MarkSchema = new mongoose.Schema(
    {
        _id: String,
        studentId: String,
        subjectId: String,
        mark: Number,
        month: Number,
        exam: Boolean,
        attempt: Number,
    },
);

const Mark = mongoose.model("Mark", MarkSchema);
export default Mark;
