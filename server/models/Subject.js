import mongoose from "mongoose";

const SubjectSchema = new mongoose.Schema(
    {
        name: String,
        _id: String
    },
);

const Subject = mongoose.model("Subject", SubjectSchema);
export default Subject;
