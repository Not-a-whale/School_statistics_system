import {Box, Button, Divider, Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useState} from "react";
import {setSidebar} from "../state";
import {useDispatch} from "react-redux";

const Sidebar = ({open}: any) => {
    const dispatch = useDispatch();

    return (<Drawer
        //from which side the drawer slides in
        anchor="left"
        //if open is true --> drawer is shown
        open={open}
        onClose={() => dispatch(setSidebar())}
    >
        {/* The inside of the drawer */}
        <Box
            sx={{
                p: 2,
                height: 1,
                backgroundColor: "#dbc8ff"
            }}
        >
            {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
            <IconButton sx={{ mb: 2 }}>
                <MenuIcon onClick={() => dispatch(setSidebar())}/>
            </IconButton>

            <Divider sx={{ mb: 2 }} />

            <Box sx={{ mb: 2 }}>
                <ListItemButton>
                    <ListItemIcon>
                        <MenuIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pictures" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <MenuIcon />
                    </ListItemIcon>
                    <ListItemText primary="Documents" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                    </ListItemIcon>
                    <ListItemText primary="Other" />
                </ListItemButton>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    position: "absolute",
                    bottom: "0",
                    left: "50%",
                    transform: "translate(-50%, 0)"
                }}
            >
                <Button variant="contained" sx={{ m: 1, width: 0.5 }}>
                    Register
                </Button>
                <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
                    Login
                </Button>
            </Box>
        </Box>
    </Drawer>)
}

export default Sidebar;
