import {Box, Typography, useTheme} from "@mui/material";
import PageHeader from "../../../components/PageHeader";
import {useLocation} from "react-router-dom";
import {useGetStudentQuery} from "../../../state/api";
import FlexBetween from "../../../components/FlexBetween";
import classes from "./index.module.scss";
import OverviewChart from "../../../components/OverviewChart";

export const Student = () => {
    const theme: any = useTheme();
    const location: any = useLocation();
    const studentId = location.pathname.split('/').pop();
    console.log('id', studentId);
    const { data, isLoading }: any = useGetStudentQuery(studentId);
    if (!data || isLoading) return "Loading...";
    const student = data[0];

    console.log('student', data);
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
                            <Typography variant="h1" sx={{ color: theme.palette.primary[600], marginBottom: ".5rem", marginTop: ".5rem" }}>
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
                            Середній бал наших студентів
                        </Typography>
                        <OverviewChart isDashboard={false} marks={student.marks}/>
                    </Box>
                </Box>

            </Box>
        </Box>
    )
}
