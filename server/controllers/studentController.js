import Student from "../models/Student.js";

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getStudentsGeography = async (req, res) => {
    try {
        const students = await Student.aggregate([
            {
                '$match': {
                    'is_expelled': false,
                    'is_alumni': false,
                    'is_foreign': true
                }
            }, {
                '$group': {
                    '_id': '$country',
                    'value': {
                        '$sum': 1
                    }
                }
            }, {
                '$project': {
                    '_id': 0,
                    'id': '$_id',
                    'value': 1
                }
            },
            {
                '$match': {
                    'id': {
                        '$ne': 'UKR'
                    }
                }
            }
        ]);

        res.status(200).json([...students]);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
