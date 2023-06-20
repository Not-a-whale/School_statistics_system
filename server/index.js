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


