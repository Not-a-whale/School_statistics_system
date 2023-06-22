import classes from "./index.module.scss";
import {Link} from "@mui/material";

const getStatusStyle = (row: any) => {
    if (row.is_foreign) {
        return {
            backgroundColor: "#2196F3",
            color: "#E3F2FD",
        }
    }
    if (row.is_alumni) {
        return {
            backgroundColor: "#FFC107",
            color: "#FFFDE7",
        }
    }
    if (row.is_expelled) {
        return {
            backgroundColor: "#F44336",
            color: "#FFEBEE",
        }
    }

    if (row.has_scholarship) {
        return {
            backgroundColor: "#228B22",
            color: "#E8F5E9",
        }
    }
    return {
            backgroundColor: "#7CFC00",
            color: "#FAFAFA",
        }
}

export const userColumns = [
    { field: "_id", headerName: "ID", width: 70, align: "center" },
    {
        field: "user",
        headerName: "Фото",
        flex: 1,
        renderCell: (params: any) => {
            return (
                <div className={classes.cellWithImg}>
                    <img className={classes.cellImg} src={params.row.avatar} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
        align: "center",
    },
    {
        field: "email",
        headerName: "Пошта",
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
        field: "faculty",
        headerName: "Факультет",
        align: "left",
        width: 50,
    },
    {
        field: "group",
        headerName: "Група",
        align: "left",
        flex: 1,
    },
    {
        field: "course",
        headerName: "Курс",
        align: "left",
        flex: 1,
    },
    {
        field: "status",
        headerName: "Status",
        flex: 1,
        renderCell: (params: any) => {
            return (
                <div
                    className={classes.cellWithStatus}
                    style={{
                        ...getStatusStyle(params.row)
                    }}
                >
                       {params.row.is_expelled ? 'Виключений' : params.row.is_foreign ? 'Іноземець' : params.row.is_alumni ? 'Випускник' : params.row.has_scholarship ? 'Стипендіат' : 'Cтудент'}
                </div>
            );
        },
    },
    {
        field: "link",
        headerName: "",
        flex: 1,
        renderCell: (params: any) => {
            return (
                <div className={classes.cellAction}>
                    <Link href={`/students/${params.row._id}`} style={{ textDecoration: "none" }}>
                        <div className={classes.viewButton}>Профіль</div>
                    </Link>
                </div>
            );
        },
    },
];
