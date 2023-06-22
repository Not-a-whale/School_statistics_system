import {Box, Typography, useTheme} from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import {useLocation} from "react-router-dom";
import {useGetStudentQuery} from "../../../state/api";
import classes from "./index.module.scss";
import OverviewChart from "../../../components/OverviewChart";

export const Student = () => {
    const theme: any = useTheme();
    const location: any = useLocation();
    const studentId = location.pathname.split('/').pop();
    const months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'];
    const { data, isLoading }: any = useGetStudentQuery(studentId);
    if (!data || isLoading) return "Loading...";
    const student = data[0];

// Создание объекта для хранения суммы и количества оценок для каждого месяца
    const monthlyData: any = {};

// Обход каждого объекта в исходном массиве
    student.marks.forEach((obj: any) => {
        const { month, mark } = obj;

        // Проверка, существует ли уже запись для текущего месяца
        if (!monthlyData[month]) {
            monthlyData[month] = {
                sum: 0,
                count: 0
            };
        }

        // Добавление оценки к сумме и увеличение счетчика
        monthlyData[month].sum += mark;
        monthlyData[month].count++;
    });

// Преобразование monthlyData в массив объектов с нужной структурой
    const result = Object.entries(monthlyData).map(([month, { sum, count }]: any) => {
        const monthName = getMonthName(month); // Функция, которая возвращает название месяца по номеру
        const average = sum / count;

        return {
            x: monthName,
            y: average
        };
    });

// Функция для получения названия месяца по его номеру
    function getMonthName(month: any) {
        const monthNames = [
            "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Вересень", "Жовтень", "Листопад", "Грудень"
        ];
        return monthNames[month - 1] || "";
    }

    const avgData = [{data: result, color: "#000", id: "marks"}]
    return (
        <Box m="1.5rem 2.5rem">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                }}
            >
                <PageHeader title="Cтудент" subtitle={`${student.name} - ${student.last_name}`} />
            </Box>
            <Box m="1.5rem 0">
                <Box
                    mt="20px"
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="200px"
                    gap="30px"
                >
                    <Box
                        gridColumn="span 4"
                        gridRow="span 2"
                        p="2rem 1rem"
                        borderRadius="0.55rem"
                        sx={{
                            backgroundColor: theme.palette.primary[0],
                            boxShadow: theme.mainBoxShadow
                        }}
                    >
                            <img style={{borderRadius: "50%"}} src={student.avatar} alt="student avatar"/>
                            <Typography variant="h2" sx={{ color: theme.palette.primary[600], marginBottom: ".5rem", marginTop: ".5rem" }}>
                                {`${student.name} - ${student.last_name}`}
                            </Typography>
                            <div className={classes.details}>
                                <div className={classes.detailItem}>
                                    <span className={classes.itemKey}>Курс:</span>
                                    <span className={classes.itemValue}>{student.course}</span>
                                </div>
                                <div className={classes.detailItem}>
                                    <span className={classes.itemKey}>Група:</span>
                                    <span className={classes.itemValue}>{student.group}</span>
                                </div>
                                <div className={classes.detailItem}>
                                    <span className={classes.itemKey}>Чи є стипендія:</span>
                                    <span className={classes.itemValue}>{student.has_scholarship ? 'Так' : 'Ні'}</span>
                                </div>
                                <div className={classes.detailItem}>
                                    <span className={classes.itemKey}>Електронна пошта:</span>
                                    <span className={classes.itemValue}>{student.email}</span>
                                </div>
                                <div className={classes.detailItem}>
                                    <span className={classes.itemKey}>Телефон:</span>
                                    <span className={classes.itemValue}> {student.phone}</span>
                                </div>
                            </div>
                    </Box>
                    <Box
                        gridColumn="span 8"
                        gridRow="span 2"
                        p="1rem"
                        borderRadius="0.55rem"
                        sx={{
                            backgroundColor: theme.palette.primary[0],
                            boxShadow: theme.mainBoxShadow
                        }}
                    >
                        <Typography variant="h5" sx={{ color: theme.palette.primary[600], marginBottom: ".5rem" }}>
                            Середній бал {student.name} - {student.last_name} за місяці
                        </Typography>
                        <OverviewChart isDashboard={false} marks={[...avgData]}/>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}
