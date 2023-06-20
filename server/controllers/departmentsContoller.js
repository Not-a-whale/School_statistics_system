import Student from "../models/Student.js";
import Mark from "../models/Mark.js";

export const getDepartmentsCount = async (req, res) => {
    try {
        /* Recent Transactions */
        const studentsInGroupsCount = await Student.aggregate([
            {
                '$match': {
                    'is_expelled': false,
                    'is_alumni': false
                }
            }, {
                '$group': {
                    '_id': '$faculty',
                    'studentNumber': {
                        '$sum': 1
                    }
                }
            }, {
                '$project': {
                    '_id': 0,
                    'faculty': '$_id',
                    'studentNumber': 1
                }
            }
        ]);
        res.status(200).json([...studentsInGroupsCount]);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
