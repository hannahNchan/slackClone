import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import ListSubheader from "@mui/material/ListSubheader";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  marginLeft: "65px",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  marginLeft: "65px",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  zIndex: "-100",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const ChannelsSideBar = ({ children }) => {
  const toggle = useSelector(
    (state: any) => state.clickActions.channelsSideBar
  );
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  React.useEffect(() => {
    if (toggle) {
      handleDrawerOpen();
      return;
    }
    handleDrawerClose();
    return;
  }, [toggle]);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader></DrawerHeader>
        <Divider />
        <List
          subheader={
            <ListSubheader component="span" id="channels">
              Canales
            </ListSubheader>
          }
        >
          {[
            {name: "Programación", type: "public"},
            {name: "La insistencia", type: "private"},
            {name: "Python", type: "public"},
            {name: "JavaScript", type: "public"},
            {name: "Xbox", type: "public"},
            {name: "Sexo", type: "private"},
          ].map((text, index) => (
            <ListItem key={text.name} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {text.type === "private" && <FontAwesomeIcon style={{ color: "#BB1122" }} icon={faLock as IconProp} />
                  || <FontAwesomeIcon style={{ color: "#63E6BE" }} icon={faCircle as IconProp} />}
                </ListItemIcon>
                <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List
          subheader={
            <ListSubheader component="span" id="privateMessages">
              Mensajes Privados
            </ListSubheader>
          }
        >
          {[
            {name: "Hannah (tú)", status: "online"},
            {name: "Marco Ventas", status: "offline"},
            {name: "Sofía", status: "online"},
            {name: "Pololo", status: "offline"},
           ].map(
            (text, index) => (
              <ListItem key={text.name} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                    }}
                  >
                  {text.status === "offline" && <FontAwesomeIcon style={{ color: "gray" }} icon={faCircle as IconProp} />
                  || <FontAwesomeIcon style={{ color: "#63E6BE" }} icon={faCircle as IconProp} />}
                  </ListItemIcon>
                  <ListItemText primary={text.name} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
      <Box
        component="div"
        sx={{
          marginLeft: "20px",
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Grid
          justifyContent="flex-end"
          container
          spacing={3}
          sx={{ minHeight: "calc(97vh - 60px)", flexGrow: 1 }}
          direction="column"
        >
          {children}
        </Grid>
      </Box>
    </Box>
  );
};

export default ChannelsSideBar;
