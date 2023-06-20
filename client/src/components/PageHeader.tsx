import { Typography, Box, useTheme, } from "@mui/material";
const PageHeader = ({ title, subtitle }: any) => {
    const theme: any = useTheme();
    return (
        <Box>
            <Typography variant="h2" color={theme.palette.primary[600]} sx={{mb: "5px"}}>{title}</Typography>
            <Typography variant="h5" color={theme.palette.primary[500]} sx={{mb: "5px"}}>{subtitle}</Typography>
        </Box>
    )
}

export default PageHeader;
