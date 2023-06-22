import {Box, Typography, useTheme} from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { ResponsiveChoropleth } from "@nivo/geo";
import {geoData} from "../../state/geoData";
import {useGetStudentsGeographyQuery} from "../../state/api";

export const Foreigners = () => {
    const theme: any = useTheme();
    const { data, isLoading }: any = useGetStudentsGeographyQuery();
    console.log('FOREIGNERS', data);
    if (!data || isLoading) return "Loading...";
    return (
        <Box m="1.5rem 2.5rem">
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    textAlign: 'left',
                }}
            >
                <PageHeader title="Іноземці" subtitle="Наші іноземі студенти"/>
            </Box>
            <Box m="1.5rem 0">
                <Box
                    mt="20px"
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="200px"
                    gap="30px"
                >
                    <Box
                        gridColumn="span 12"
                        gridRow="span 3"
                        p="2rem"
                        borderRadius="0.55rem"
                        sx={{
                            backgroundColor: theme.palette.primary[0],
                            boxShadow: theme.mainBoxShadow
                        }}
                    >
                    {data ? (
                        <ResponsiveChoropleth
                            data={data}
                            theme={{
                                axis: {
                                    domain: {
                                        line: {
                                            stroke: theme.palette.primary[200],
                                        },
                                    },
                                    legend: {
                                        text: {
                                            fill: theme.palette.primary[200],
                                        },
                                    },
                                    ticks: {
                                        line: {
                                            stroke: theme.palette.primary[200],
                                            strokeWidth: 1,
                                        },
                                        text: {
                                            fill: theme.palette.primary[200],
                                        },
                                    },
                                },
                                legends: {
                                    text: {
                                        fill: theme.palette.primary[200],
                                    },
                                },
                                tooltip: {
                                    container: {
                                        color: theme.palette.primary.main,
                                    },
                                },
                                fontSize: 14,
                            }}
                            features={geoData.features}
                            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
                            domain={[0, 60]}
                            unknownColor="#666666"
                            label="properties.name"
                            valueFormat=".2s"
                            projectionScale={150}
                            projectionTranslation={[0.45, 0.6]}
                            projectionRotation={[0, 0, 0]}
                            borderWidth={1.3}
                            borderColor="#ffffff"
                            legends={[
                                {
                                    anchor: "bottom-right",
                                    direction: "column",
                                    justify: true,
                                    translateX: 0,
                                    translateY: -125,
                                    itemsSpacing: 0,
                                    itemWidth: 94,
                                    itemHeight: 18,
                                    itemDirection: "left-to-right",
                                    itemTextColor: theme.palette.primary[1000],
                                    itemOpacity: 1,
                                    symbolSize: 25,
                                    effects: [
                                        {
                                            on: "hover",
                                            style: {
                                                itemTextColor: theme.palette.primary[1000],
                                                itemOpacity: 1,
                                            },
                                        },
                                    ],
                                },
                            ]}
                        />
                    ) : (
                        <>Loading...</>
                    )}
                    </Box>
                    <Box
                        gridColumn="span 12"
                        gridRow="span 1"
                        p="2rem"
                        borderRadius="0.55rem"
                        sx={{
                            backgroundColor: theme.palette.primary[0],
                            boxShadow: theme.mainBoxShadow
                        }}
                    >
                        <Typography variant="h4" sx={{ color: theme.palette.primary[600], textAlign: "left"  }}>
                            У нашому навчальному закладу навчаються студенти з {data.length} країн світу.
                            <br/>
                            <br/>
                            Найбільше студентів приїхало до нас з Румунії, а саме - 41 студентів.
                        </Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
