import Student from "../models/Student.js";

export const getStudents = async (req, res) => {
    try {
        const students = await Student.find();

        res.status(200).json(students);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const getStudent = async (req, res) => {
    const { id } = req.params;
    try {
        const student = await Student.aggregate([
            {
                '$match': {
                    '_id': {
                        '$eq': `${id}`
                    }
                }
            }, {
                '$lookup': {
                    'from': 'marks',
                    'localField': '_id',
                    'foreignField': 'studentId',
                    'as': 'marks'
                }
            }
        ]);

        res.status(200).json(student);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getStudentsGeography = async (req, res) => {
    console.log('getStudentsGeography');
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
        console.log('students', students);
        res.status(200).json([...students]);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
