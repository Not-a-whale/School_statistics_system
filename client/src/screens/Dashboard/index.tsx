import {Box, useMediaQuery, useTheme} from "@mui/material";
import {useGetStudentsQuery} from "../../state/api";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";
import PageHeader from "../../components/PageHeader";

const Dashboard = () => {
    const { data, isLoading }: any = useGetStudentsQuery();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
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
        <Box m="1.5rem 2.5rem">
            <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  textAlign: 'left'
                }}
            >
                <PageHeader title="Дашборд" subtitle="Ласкаво просимо до нашої системи"/>
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
                           color: theme.palette.secondary[100],
                           borderBottom: "none",
                       },
                       "& .MuiDataGrid-virtualScroller": {
                           backgroundColor: theme.palette.background.alt,
                       },
                       "& .MuiDataGrid-footerContainer": {
                           backgroundColor: theme.palette.background.alt,
                           color: theme.palette.secondary[100],
                           borderTop: "none",
                       },
                       "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
                           color: `${theme.palette.secondary[200]} !important`,
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
        </Box>

    )
};

export default Dashboard;
