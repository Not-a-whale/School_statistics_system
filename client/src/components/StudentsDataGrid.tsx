import {Box, useMediaQuery, useTheme} from "@mui/material";
import {useGetStudentsQuery} from "../state/api";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";

const OverviewChart = ({ isDashboard }: any) => {
    const theme: any = useTheme();
    const { data, isLoading } = useGetStudentsQuery();
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    });
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
    if (!data || isLoading) return "Loading...";
    return (
            <DataGrid
                loading={isLoading || !data}
                getRowId={(row) => row._id}
                rows={(data) || []}
                columns={columns}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[10, 20, 50]}
            />
    )
}

export default OverviewChart;
