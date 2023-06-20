import {Box, useMediaQuery, useTheme} from "@mui/material";
import {useGetStudentsQuery, useGetDashboardQuery} from "../../state/api";
import {DataGrid} from "@mui/x-data-grid";
import {useState} from "react";
import PageHeader from "../../components/PageHeader";
import StatBox from "../../components/StatBox";
import {Email, PersonAdd, PointOfSale, Traffic} from "@mui/icons-material";
import Groups3Icon from '@mui/icons-material/Groups3';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import OverviewChart from "../../components/OverviewChart";
import AccessibleIcon from '@mui/icons-material/Accessible';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import StudentsDataGrid from "../../components/StudentsDataGrid";

const Dashboard = () => {
    const { data, isLoading }: any = useGetDashboardQuery();
    const isNonMediumScreens = useMediaQuery("(min-width: 1200px)");
    const [paginationModel, setPaginationModel] = useState({
        pageSize: 10,
        page: 0,
    });
    console.log('data', data);
    const theme: any = useTheme();

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
               {/* ROW 1 */}
               <StatBox
                   title="Всього студентів"
                   value={data && data.studentsCount}
                   icon={
                       <Groups3Icon
                           sx={{ color: theme.palette.primary[600], fontSize: "26px" }}
                       />
                   }
               />
               <StatBox
                   title="Наші відмінники"
                   value={data && data.highAchieversCount}
                   increase="+21%"
                   description="За минулий семестр"
                   icon={
                       <GroupAddIcon
                           sx={{ color: theme.palette.primary[600], fontSize: "26px" }}
                       />
                   }
               />
              <Box
                   gridColumn="span 8"
                   gridRow="span 2"
                   p="1rem"
                   borderRadius="0.55rem"
                   sx={{
                       backgroundColor: theme.palette.primary[0]
                   }}
               >
                   <OverviewChart isDashboard={true} />
               </Box>
              <StatBox
                   title="Іноземці"
                   value={data && data.foreignersCount}
                   increase="+5%"
                   description="За останній рік"
                   icon={
                       <Diversity1Icon
                           sx={{ color: theme.palette.primary[600], fontSize: "26px" }}
                       />
                   }
               />
               <StatBox
                   title="Відраховані"
                   value={data && data.dropoutCount}
                   increase="+1%"
                   description="За останній рік"
                   icon={
                       <AccessibleIcon
                           sx={{ color: theme.palette.primary[600], fontSize: "26px" }}
                       />
                   }
               />
                {/* ROW 2 */}
               <Box
                   gridColumn="span 8"
                   gridRow="span 2"
                   p="1rem"
                   borderRadius="0.55rem"
                   sx={{
                       backgroundColor: theme.palette.primary[0]
                   }}
               >
                    <StudentsDataGrid />
               </Box>
               <Box
                   gridColumn="span 4"
                   gridRow="span 2"
                   p="1rem"
                   borderRadius="0.55rem"
                   sx={{
                       backgroundColor: theme.palette.primary[0]
                   }}
               ></Box>
{/*               <Box
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
                       loading={isLoading || !students}
                       getRowId={(row) => row._id}
                       rows={(students) || []}
                       columns={columns}
                       paginationModel={paginationModel}
                       onPaginationModelChange={setPaginationModel}
                       pageSizeOptions={[10, 20, 50]}
                   />
               </Box>*/}
            </Box>
        </Box>

    )
};

export default Dashboard;
