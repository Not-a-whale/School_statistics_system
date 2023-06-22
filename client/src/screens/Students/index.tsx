import {Box, Link, Typography, useMediaQuery, useTheme} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {userColumns} from "./studentsTableSource";
import classes from "./index.module.scss";
import {useGetStudentsQuery} from "../../state/api";
import PageHeader from "../../components/PageHeader";

export const Students = () => {
    const { data, isLoading }: any = useGetStudentsQuery();
    const theme: any = useTheme();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    if (!data || isLoading) return "Loading...";
    return (
        <Box m="1.5rem 2.5rem" className={classes.datatable}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                }}
            >
                <PageHeader title="Студенти" subtitle="Дані наших студентів"/>
            </Box>
                <Box
                    mt="20px"
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="160px"
                    gap="20px"
                    sx={{
                        "& > div": { gridColumn: isNonMediumScreens ? undefined : "span 12" },
                    }}
                >
                <Box
                    gridColumn="span 12"
                    gridRow="span 4"
                    p="2rem 1rem 2rem 1rem"
                    borderRadius="0.55rem"
                    sx={{
                        backgroundColor: theme.palette.primary[0],
                        boxShadow: theme.mainBoxShadow
                    }}
                >
                    <Typography variant="h5" sx={{ color: theme.palette.primary[600], marginBottom: ".5rem" }}>
                        Таблиця студентів
                    </Typography>
                    <DataGrid
                        className={classes.datatableGrid}
                        rows={data}
                        getRowId={(row) => row._id}
                        columns={userColumns}
                        pageSize={9}
                        rowsPerPageOptions={[9]}
                    />
                </Box>
            </Box>
        </Box>
    )
}
