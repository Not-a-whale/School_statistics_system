import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
        },
        last_name: String,
        email: String,
        phone: String,
        _id: {
            type: String,
        },
        is_expelled: {
            type: Boolean,
        },
        has_scholarship: {
            type: Boolean,
        },
        faculty: {
            type: String,
            enum: ["Pr", "Pl", "Buh", "Obr"],
        },
        course: {
            type: Number,
            enum: [1, 2, 3, 4],
        },
        group: String,
        disciplines: {
            type: Array,
        },
        transactions: {
            type: Array,
        },
        is_foreign: Boolean,
        semester_fee: Number,
        country: String,
        is_alumni: Boolean,
        gender: Boolean,
        year_of_graduation: Number,
        avatar: String,
    },
);

const Student = mongoose.model("Student", StudentSchema);
export default Student;
