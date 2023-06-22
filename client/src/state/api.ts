import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({ baseUrl: '' });

export const apiSlice = createApi({
    baseQuery,
    reducerPath: "adminApi",
    tagTypes: ['User', "Students", "Student"],
    endpoints: (build: any) => ({
        getStudents: build.query({
            query: () => "api/students",
            providesTags: ["Students"],
        }),
        getStudent: build.query({
           query: (id: string) => `/api/students/student/${id}`,
            providesTags: ["Student"],
        }),
        getDashboard: build.query({
            query: () => "api/general/dashboard",
            providesTags: ["Dashboard"],
        }),
        getMarks: build.query({
            query: () => "api/marks/avgMarks",
            providesTags: ["Marks"],
        }),
        getDepartments: build.query({
            query: () => "api/departments/departmentsCount",
            providesTags: ["Groups"],
        }),
        getStudentsGeography: build.query({
            query: () => `api/students/geography`,
            providesTags: ["User"],
        })
    }),
});

export const {
    useGetStudentsQuery,
    useGetDashboardQuery,
    useGetMarksQuery,
    useGetDepartmentsQuery,
    useGetStudentsGeographyQuery,
    useGetStudentQuery
} = apiSlice;
