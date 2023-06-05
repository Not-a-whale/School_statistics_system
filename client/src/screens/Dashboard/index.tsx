import {Box, useTheme} from "@mui/material";
import TableComponent from "../../components/Table";
import {useGetStudentsQuery} from "../../state/api";
import {DataGrid} from "@mui/x-data-grid";
import {StudentBase} from "../../interfaces/student.interface";
import {useState} from "react";

const Dashboard = () => {
    const { data, isLoading }: StudentBase = useGetStudentsQuery();
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    });
    console.log(data);
    const theme: any = useTheme();
    const columns = [
        {
            field: "_id",
            headerName: "ID Студента",
            flex: 1,
        },
        {
            field: "name",
            headerName: "Ім'я",
            flex: 1,
        },
        {
            field: "last_name",
            headerName: "Прізвище",
            flex: 1,
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        {
            field: "group",
            headerName: "Група",
            flex: 1,
        },
        {
            field: "faculty",
            headerName: "Факультет",
            flex: 1,
        },
    ];

    return (
        <Box
            sx={{
                background: theme.palette.secondary[10],
                color: theme.palette.primary[1000],
            }}
        >
            <Box
                gridColumn="span 8"
                gridRow="span 3"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                        borderRadius: "5rem",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.primary[1000],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: theme.palette.background.alt,
                    },
                    "& .MuiDataGrid-footerContainer": {
                        backgroundColor: theme.palette.background.alt,
                        color: theme.palette.primary[1000],
                        borderTop: "none",
                    },
                    "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                        color: `${theme.palette.primary[1000]} !important`,
                    },
                }}
            >
                <DataGrid
                    loading={isLoading || !data}
                    getRowId={(row) => row._id}
                    rows={(data) || []}
                    columns={columns}
                    paginationModel={paginationModel}
                    onPaginationModelChange={setPaginationModel}
                    pageSizeOptions={[10, 20, 50]}
                />
            </Box>
        </Box>
    )
};

export default Dashboard;
