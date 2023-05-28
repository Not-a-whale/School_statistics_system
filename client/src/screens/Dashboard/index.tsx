import {Box} from "@mui/material";
import TableComponent from "../../components/Table";
import {useGetStudentsQuery} from "../../state/api";

const Dashboard = () => {
    const { data, isLoading } = useGetStudentsQuery();
    return (
        <Box>
            <TableComponent data={data} />
        </Box>
    )
};

export default Dashboard;
