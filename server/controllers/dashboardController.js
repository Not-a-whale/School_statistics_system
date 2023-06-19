import Student from "../models/Student.js";
import Mark from "../models/Mark.js";

export const getDashboardStats = async (req, res) => {
    try {
        /* Recent Transactions */
        const studentsCount = await Student.aggregate([
            {
                '$match': {
                    'is_alumni': false,
                    'is_expelled': false
                }
            }, {
                '$count': 'current_students'
            }
        ]);

        const foreignersCount = await Student.aggregate([
            {
                '$match': {
                    'is_alumni': false,
                    'is_expelled': false,
                    'is_foreign': true
                }
            }, {
                '$count': 'current_foreigners'
            }
        ]);

        const dropoutCount = await Student.aggregate([
            {
                '$match': {
                    'is_expelled': true,
                }
            }, {
                '$count': 'current_dropout'
            }
        ]);

        const highAchieversCount = await Mark.aggregate([
            {
                '$match': {
                    'mark': {
                        '$gt': 3.6
                    }
                }
            }, {
                '$group': {
                    '_id': '$studentId',
                    'mark': {
                        '$push': '$mark'
                    }
                }
            }, {
                '$addFields': {
                    'avgMark': {
                        '$avg': '$mark'
                    }
                }
            }, {
                '$match': {
                    'avgMark': {
                        '$gt': 4.4
                    }
                }
            }, {
                '$count': 'overachieversCount'
            }
        ]);
        res.status(200).json({
            studentsCount: studentsCount[0]?.current_students,
            foreignersCount: foreignersCount[0]?.current_foreigners,
            dropoutCount: dropoutCount[0]?.current_dropout,
            highAchieversCount: highAchieversCount[0]?.overachieversCount
        });
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
