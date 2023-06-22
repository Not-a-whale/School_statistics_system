import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import generalRoutes from "./routes/generalRoutes.js";
import {errorHandler, notFound} from "./middleware/errorMiddleware.js";
import marksRoutes from "./routes/marksRoutes.js";
import departmentsRoutes from "./routes/departmentsRoutes.js";
import { faker } from '@faker-js/faker';
import _ from "lodash";
import Student from "./models/Student.js";
import Mark from "./models/Mark.js";


/* CONFIGURATION */
const env = dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* ROUTES */
app.use('/api/users/', userRoutes);
app.use('/api/students/', studentRoutes);
app.use('/api/departments/', departmentsRoutes);
app.use('/api/general/', generalRoutes);
app.use('/api/marks/', marksRoutes);
app.get('/', (req, res) => res.send('Server is ready'));

app.use(notFound);
app.use(errorHandler);

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

const subjects = [
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


/* MONGOOSE SETUP */
const PORT = env.parsed.PORT || 5000;
mongoose
    .connect(env.parsed.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
    })
    .catch((error) => console.log(`${error} did not connect`));


