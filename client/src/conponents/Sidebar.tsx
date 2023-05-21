import {Box, Button, Divider, Drawer, IconButton, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import {useState} from "react";

const Sidebar = () => {
    const [open, setState] = useState(false);

    //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        //changes the function state according to the value of open
        setState(open);
    };

    return (<Drawer
        //from which side the drawer slides in
        anchor="left"
        //if open is true --> drawer is shown
        open={open}
        //function that is called when the drawer should close
        onClose={toggleDrawer(false)}
        //function that is called when the drawer should open
        onOpen={toggleDrawer(true)}
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
                <MenuIcon onClick={toggleDrawer(false)}/>
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
