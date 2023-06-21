import {Link} from "@mui/material";
import {DataGrid} from "@mui/x-data-grid";
import {userColumns} from "./studentsTableSource";
import classes from "./index.module.scss";
import {useGetStudentsQuery} from "../../state/api";

export const Students = () => {
    const { data, isLoading }: any = useGetStudentsQuery();

    if (!data || isLoading) return "Loading...";
    return (
        <div className={classes.datatable}>
            <div className={classes.datatableTitle}>
                Add New User
                <Link to="/users/new" className={classes.link}>
                    Add New
                </Link>
            </div>
            <DataGrid
                className={classes.datatableGrid}
                rows={data}
                getRowId={(row) => row._id}
                columns={userColumns}
                pageSize={9}
                rowsPerPageOptions={[9]}
            />
        </div>
    )
}
