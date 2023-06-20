import Mark from "../models/Mark.js";

export const getAverageMarks = async (req, res) => {
    const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
    try {
        const marks = await Mark.aggregate([
            {
                '$group': {
                    '_id': '$month',
                    'month': {
                        '$push': '$mark'
                    }
                }
            }, {
                '$addFields': {
                    'avgMark': {
                        '$avg': '$month'
                    }
                }
            }, {
                '$project': {
                    '_id': 0,
                    'month': '$_id',
                    'avgMark': '$avgMark'
                }
            }
        ]);
        res.status(200).json([{
            id: 'marks',
            color: "#000",
            data: marks?.map((mark, index) => {
                return {
                    x: months[mark.month - 1],
                    y: mark.avgMark + (Math.random() * 1.1)
                };
            }),
        }]);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
