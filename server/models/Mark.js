import mongoose from "mongoose";

const MarkSchema = new mongoose.Schema(
    {
        _id: String,
        studentId: String,
        subjectId: String,
        mark: Number,
    },
);

const Mark = mongoose.model("Mark", MarkSchema);
export default Mark;
