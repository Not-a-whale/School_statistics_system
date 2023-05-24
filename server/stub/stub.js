import Subject from "./models/Subject.js";
import Mark from "./models/Mark.js";

/*
import { faker } from '@faker-js/faker';
import _ from "lodash";

const students = [];
const faculties = ["Pr", "Pl", "Buh", "Obr"];

const groups = ["11", "12", "13", "14"];

const phoneNumbers = ["73", "63", "95", "93", "66", "50"];

const countries = ["UKR", "RUS", "CHN", "ARM", "JOR", "ZAF", "KGZ", "MKD", "ROU"];

const disciplinesBasic = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
const disciplines2 = ["13", "14", "15", "16"];
const disciplines3 = ["17", "18", "19", "20"];
const disciplines4 = ["21", "22", "23", "24"];

function generateWithProbability(probability) {
    if (Math.random() < probability) {
        return true;
    } else {
        return false;
    }
}

for (let i = 0; i < 1200; i++) {
    const is_foreign = faker.datatype.boolean( { likelihood: 20 } );
    const country = is_foreign ? _.sample(countries) : "UKR";
    const name = is_foreign ? faker.name.firstName() : faker.name.firstName(0);
    const last_name = is_foreign ? faker.name.lastName() : faker.name.lastName(0);
    const email = faker.internet.email(name, last_name, "gmail.com");
    const phone = faker.phone.number(`+380${_.sample(phoneNumbers)}#######`);
    const course = faker.datatype.number({ min: 1, max: 4 });
    const faculty = _.sample(faculties);
    const group = `${course}${_.sample(groups)}-${faculty}`;
    const disciplines = [...disciplinesBasic, ...(course > 1 ? disciplines2 : []), ...(course > 2 ? disciplines3 : []), ...(course > 3 ? disciplines4 : [])];
    const transactions = Array.from({ length: course * 2 + faker.datatype.number({ min: 0, max: 2 }) }, () => faker.datatype.hexadecimal(12));
    const is_expelled = generateWithProbability(0.1);
    const has_scholarship = faker.datatype.boolean();
    const _id = faker.datatype.hexadecimal(12) + faker.datatype.hexadecimal(12);
    const semester_fee = is_foreign ? faker.datatype.number({ min: 3000, max: 8000, precision: 1 }) : 2000;
    const is_alumni = course === 4 && !is_expelled ? generateWithProbability(0.9) : false;
    const year_of_graduation = is_alumni ? faker.datatype.number({ min: 2010, max: 2023 }) : null;
    const gender = faker.datatype.boolean({ likelihood: 3});

    students.push({
        name,
        last_name,
        email,
        phone,
        _id,
        is_expelled,
        has_scholarship,
        faculty,
        course,
        group,
        disciplines,
        transactions,
        is_foreign,
        semester_fee,
        country,
        is_alumni,
        year_of_graduation,
        gender
    });
}

cont subjects = [
    {
        _id: "1",
        name: "Математика",
    },
    {
        _id: "2",
        name: "Фізика",
    },
    {
        _id: "3",
        name: "Хімія",
    },
    {
        _id: "4",
        name: "Біологія",
    },
    {
        _id: "5",
        name: "Географія",
    },
    {
        _id: "6",
        name: "Історія",
    },
    {
        _id: "7",
        name: "Українська мова",
    },
    {
        _id: "8",
        name: "Українська література",
    },
    {
        _id: "9",
        name: "Англійська мова",
    },
    {
        _id: "10",
        name: "Інформатика",
    },
    {
        _id: "11",
        name: "Фізична культура",
    },
    {
        _id: "12",
        name: "Захист Вітчизни",
    },
    {
        _id: "13",
        name: "Теорія ймовірності",
    },
    {
        _id: "14",
        name: "Дискретна математика",
    },
    {
        _id: "15",
        name: "Диференціальні рівняння",
    },
    {
        _id: "16",
        name: "Основи програмування",
    },
    {
        _id: "17",
        name: "Алгоритми та структури даних",
    },
    {
        _id: "18",
        name: "Програмування на мові C++",
    },
    {
        _id: "19",
        name: "Програмування на мові Python",
    },
    {
        _id: "20",
        name: "Програмування WEB-застосунків",
    },
    {
        _id: "21",
        name: "Основи мережних технологій",
    },
    {
        _id: "22",
        name: "Основи баз даних",
    },
    {
        _id: "23",
        name: "Основи теорії ігор",
    },
    {
        _id: "24",
        name: "Основи штучного інтелекту",
    }
]

const students = [];
*/

        //Student.insertMany(students);
        //Subject.insertMany(subjects);
/*        Student.find().then((students) => {
            const marks = [];
            students.forEach((student) => {
                student.disciplines.forEach((subjectId) => {
                    for (let i = 0; i < 10; i++) {
                        const newMark = {
                            _id: faker.datatype.hexadecimal(12) + faker.datatype.hexadecimal(12),
                            studentId: student._id,
                            subjectId: subjectId,
                            month: i + 1,
                            exam: (month === 4 || month === 9) ? true : false,
                            attempt: (month === 4 || month === 9) ? 1 : faker.datatype.number({ min: 1, max: 3 }),
                            mark: faker.datatype.float({ min: 2, max: 5 })
                        };
                        marks.push(newMark);
                    }
                });
            });
            console.log(marks);
            Mark.insertMany(marks).then(() => {
                console.log('Marks saved successfully');
            }).catch((err) => {
                console.error('Error saving marks:', err);
            });
        }).catch((err) => {
            console.error('Error getting students:', err);
        });*/

/*for (let i = 0; i < 1200; i++) {
    const is_foreign = faker.datatype.boolean( { likelihood: 20 } );
    const country = is_foreign ? _.sample(countries) : "UKR";
    const name = is_foreign ? faker.name.firstName() : faker.name.firstName(0);
    const last_name = is_foreign ? faker.name.lastName() : faker.name.lastName(0);
    const email = faker.internet.email(name, last_name, "gmail.com");
    const phone = faker.phone.number(`+380${_.sample(phoneNumbers)}#######`);
    const course = faker.datatype.number({ min: 1, max: 4 });
    const faculty = _.sample(faculties);
    const group = `${course}${_.sample(groups)}-${faculty}`;
    const disciplines = [...disciplinesBasic, ...(course > 1 ? disciplines2 : []), ...(course > 2 ? disciplines3 : []), ...(course > 3 ? disciplines4 : [])];
    const transactions = Array.from({ length: course * 2 + faker.datatype.number({ min: 0, max: 2 }) }, () => faker.datatype.hexadecimal(12));
    const is_expelled = faker.datatype.boolean({ likelihood: 10 });
    const has_scholarship = faker.datatype.boolean();
    const _id = faker.datatype.hexadecimal(12) + faker.datatype.hexadecimal(12);
    const semester_fee = is_foreign ? faker.datatype.number({ min: 3000, max: 8000, precision: 1 }) : 2000;
    const is_alumni = course === 4 && !is_expelled ? faker.datatype.boolean({ likelihood: 10 }) : false;

    students.push({
        name,
        last_name,
        email,
        phone,
        _id,
        is_expelled,
        has_scholarship,
        faculty,
        course,
        group,
        disciplines,
        transactions,
        is_foreign,
        semester_fee,
        country,
        is_alumni
    });
}*/


/*
const subjects  = [
    {
        _id: "1",
        name: "Математика",
    },
    {
        _id: "2",
        name: "Фізика",
    },
    {
        _id: "3",
        name: "Хімія",
    },
    {
        _id: "4",
        name: "Біологія",
    },
    {
        _id: "5",
        name: "Географія",
    },
    {
        _id: "6",
        name: "Історія",
    },
    {
        _id: "7",
        name: "Українська мова",
    },
    {
        _id: "8",
        name: "Українська література",
    },
    {
        _id: "9",
        name: "Англійська мова",
    },
    {
        _id: "10",
        name: "Інформатика",
    },
    {
        _id: "11",
        name: "Фізична культура",
    },
    {
        _id: "12",
        name: "Захист Вітчизни",
    },
    {
        _id: "13",
        name: "Теорія ймовірності",
    },
    {
        _id: "14",
        name: "Дискретна математика",
    },
    {
        _id: "15",
        name: "Диференціальні рівняння",
    },
    {
        _id: "16",
        name: "Основи програмування",
    },
    {
        _id: "17",
        name: "Алгоритми та структури даних",
    },
    {
        _id: "18",
        name: "Програмування на мові C++",
    },
    {
        _id: "19",
        name: "Програмування на мові Python",
    },
    {
        _id: "20",
        name: "Програмування WEB-застосунків",
    },
    {
        _id: "21",
        name: "Основи мережних технологій",
    },
    {
        _id: "22",
        name: "Основи баз даних",
    },
    {
        _id: "23",
        name: "Основи теорії ігор",
    },
    {
        _id: "24",
        name: "Основи штучного інтелекту",
    }
]

            students.forEach((student) => {
                student.disciplines.forEach((subjectId) => {
                    for (let i = 0; i < 10; i++) {
                        const newMark = {
                            _id: faker.datatype.hexadecimal(12) + faker.datatype.hexadecimal(12),
                            studentId: student._id,
                            subjectId: subjectId,
                            month: i + 1,
                            exam: (i + 1 === 4 || i + 1 === 9) ? true : false,
                            attempt: (i + 1 === 4 || i + 1 === 9) ? faker.datatype.number({ min: 1, max: 3 }) : 1,
                            mark: faker.datatype.float({ min: 2, max: 5 })
                        };
                        marks.push(newMark);
                    }
                });
            });
            console.log(marks);
            Mark.insertMany(marks).then(() => {
                console.log('Marks saved successfully');
            }).catch((err) => {
                console.error('Error saving marks:', err);
            });
        }).catch((err) => {
            console.error('Error getting students:', err);
        });


*/
