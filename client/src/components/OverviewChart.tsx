import {Box, Typography, useTheme} from "@mui/material";
import {useGetMarksQuery} from "../state/api";
import {ResponsiveLine} from "@nivo/line";

const OverviewChart = ({ isDashboard, marks }: any) => {
    const theme: any = useTheme();
    const { data, isLoading } = useGetMarksQuery();
    console.log('overview chart data', data);
    if (!data || isLoading) return "Loading...";
    return (
        <ResponsiveLine
            data={isDashboard ? data : marks}
            colors={[theme.palette.primary[600]]}
            layers={["grid", "axes", "lines", "markers", "legends"]}
            axisLeft={{
                legend: "Середній бал",
                legendPosition: "middle",
                legendOffset: -40
            }}
            pointColor={{ theme: "background" }}
            pointBorderWidth={2}
            pointBorderColor={{ from: "serieColor" }}
            theme={{
                axis: {
                    domain: {
                        line: {
                            stroke: theme.palette.primary[600],
                        },
                    },
                    legend: {
                        text: {
                            fill: theme.palette.primary[600],
                        },
                    },
                    ticks: {
                        line: {
                            stroke: theme.palette.primary[600],
                            strokeWidth: 1,
                        },
                        text: {
                            fill: theme.palette.primary[600],
                        },
                    },
                },
                legends: {
                    text: {
                        fill: theme.palette.primary[600],
                    },
                },
                tooltip: {
                    container: {
                        color: theme.palette.primary.main,
                    },
                },
            }}
            margin={{ top: 0, right: 50, bottom: 50, left: 50 }}
        />
    )
}

export default OverviewChart;
