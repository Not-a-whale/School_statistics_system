import {Box, Typography, useTheme} from "@mui/material";
import {ResponsivePie} from "@nivo/pie";
import {useGetDepartmentsQuery} from "../state/api";

const BreakdownChart = ({ isDashboard = false }) => {
    const { data, isLoading }: any = useGetDepartmentsQuery();
    const theme: any = useTheme();

    if (!data || isLoading) return "Loading...";

    const colors = [
        theme.palette.tertiary[100],
        theme.palette.tertiary[300],
        theme.palette.tertiary[900],
        theme.palette.tertiary[500],
    ];

    const departments: any = {
        "Buh": "Бухгалтерія",
        "Pr": "Програмування",
        "Obr": "Обробка матеріалів",
        "Pl": "Планування"
    }

    const departmentsAbbr: any = {
        "Buh": "Бух",
        "Pr": "Прог",
        "Obr": "Обр",
        "Pl": "План"
    }

    const formattedData: any[] = data.map((faculty: any, i: number) => {
       return {
           id: departments[faculty.faculty],
           label: departmentsAbbr[faculty.faculty],
           value: faculty.studentNumber,
           color: colors[i],
       }
    });

    return (
        <Box
            height={isDashboard ? "100%" : "100%"}
            width="100%"
            minHeight={isDashboard ? "325px" : undefined}
            minWidth={isDashboard ? "325px" : undefined}
            position="relative"
            display="flex"
            justifyContent="center"
            alignItems="center"
        >
            <ResponsivePie
                data={formattedData}
                theme={{
                    axis: {
                        domain: {
                            line: {
                                stroke: theme.palette.secondary[200],
                                fontSize: 14
                            },
                        },
                        legend: {
                            text: {
                                fill: theme.palette.secondary[200],
                                fontSize: 14
                            },
                        },
                        ticks: {
                            line: {
                                stroke: theme.palette.secondary[200],
                                strokeWidth: 1,
                                fontSize: 14
                            },
                            text: {
                                fill: theme.palette.secondary[200],
                                fontSize: 14
                            },
                        },
                    },
                    legends: {
                        text: {
                            fill: theme.palette.secondary[200],
                            fontSize: 14
                        },
                    },
                    tooltip: {
                        container: {
                            color: theme.palette.primary.main,
                        },
                    },
                    labels: {
                        text: {
                            fontSize: 14
                        }
                    }
                }}
                colors={{ datum: "data.color" }}
                margin={
                    isDashboard
                        ? { top: 20, right: 20, bottom: 100, left: 20 }
                        : { top: 40, right: 80, bottom: 80, left: 80 }
                }
                sortByValue={true}
                innerRadius={0.45}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{
                    from: "color",
                    modifiers: [["darker", 0.2]],
                }}
                enableArcLinkLabels={!isDashboard}
                arcLinkLabelsTextColor={theme.palette.primary[600]}
                arcLinkLabelsThickness={4}
                arcLinkLabelsColor={{ from: "color" }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{
                    from: "color",
                    modifiers: [["darker", 2]],
                }}
                legends={[
                    {
                        anchor: "bottom",
                        direction: "row",
                        justify: false,
                        translateX: isDashboard ? 20 : 0,
                        translateY: isDashboard ? 50 : 56,
                        itemsSpacing: 0,
                        itemWidth: 85,
                        itemHeight: 18,
                        itemTextColor: theme.palette.primary[1000],
                        itemDirection: "left-to-right",
                        itemOpacity: 1,
                        symbolSize: 28,
                        symbolShape: "circle",
                        effects: [
                            {
                                on: "hover",
                                style: {
                                    itemTextColor: theme.palette.primary[500],
                                },
                            },
                        ],
                    },
                ]}
            />
        </Box>
    );
};

export default BreakdownChart;
