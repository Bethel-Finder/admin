import React, { useState } from "react";
import { connect } from "react-redux";

import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useHistory, useParams } from "react-router-dom";
import {addState} from "../functions/controllers/add-state"
import {
  HomeWork,
  OtherHouses,
  House,
  Home,
  VpnKey,
  HouseSiding,
  AddBox,
  AddCircleOutline,
  Cancel,
} from "@mui/icons-material";
import {disp_states } from "../redux";

const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
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
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const formInput = {
  border: "none",
  borderRadius: "6px",
  padding: "10px",
  width: "90%",
  margin: "10px",
  outline: "none",
};

const formInputSubmit = {
  border: "none",
  borderRadius: "6px",
  padding: "10px",
  width: "90%",
  margin: "10px",
  background: "black",
  color: "white",
  outline: "none",
};

function MiniDrawer({appState, dispStates}) {
  let history = useHistory();
  const reduxState = appState;
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const [stateName, setStatename] = useState("");
  const [adminName, setAdminnane] = useState("");
  const [headquater, setHeadquater] = useState("");
  const [adminContact, setAdmincontact] = useState("");
  const [desc, setDesc] = useState("");

  const handleStateSubmit = (e) => {
    e.preventDefault();
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [compState, setCompState] = useState({
    addState: false,
  });
  const close = () => {
    setCompState({
      ...compState,
      addState: false,
    });
  };

 
  const [state, setSTATE] = useState("");
  const [hqr, setHQR] = useState("");
  const [admin, setADMIN] = useState("");
  const [admincontact, setADMINCONTACT] = useState("");
  const [statedesc, setSTATEDESC] = useState("");

  // @===== createState
  const createState = () => {
    const data = {
      state,
      hqr,
      admin,
      admincontact,
      statedesc
    } 
    addState(data).then(res => {
      if (res.success === true) {
        // save to redux
        dispStates(res.data)
        console.log("done")
        setCompState({
          ...compState,
          addState:false
        })
      } else {
        // echo error
        console.log(res)
      }
    })
  };
 
  return (
    <>
      {console.log(reduxState)}
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            {open == true ? (
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            ) : (
              <IconButton onClick={handleDrawerOpen}>
                <ChevronRightIcon />
              </IconButton>
            )}
          </DrawerHeader>
          <Divider />
          <List>
            <ListItem
              onClick={() => {
                history.push("/");
              }}
              button
              key={"text"}
            >
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItem>

            <ListItem
              button
              onClick={() => {
                history.push("/states");
              }}
              key={"text"}
            >
              <ListItemIcon>
                <HomeWork />
              </ListItemIcon>
              <ListItemText primary={"States"} />
            </ListItem>

            <ListItem button key={"text"}>
              <ListItemIcon>
                <OtherHouses />
              </ListItemIcon>
              <ListItemText primary={"Districts"} />
            </ListItem>

            <ListItem button key={"text"}>
              <ListItemIcon>
                <House />
              </ListItemIcon>
              <ListItemText primary={"Areas"} />
            </ListItem>

            <ListItem button key={"text"}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Zones"} />
            </ListItem>

            <ListItem button key={"text"}>
              <ListItemIcon>
                <HouseSiding />
              </ListItemIcon>
              <ListItemText primary={"Bethels"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem button key={"text"}>
              <ListItemIcon>
                <VpnKey />
              </ListItemIcon>
              <ListItemText primary={"Admin Access"} />
            </ListItem>

            <ListItem
              onClick={() => {
                setCompState({
                  ...compState,
                  addState: true,
                });
              }}
              button
              key={"text"}
            >
              <ListItemIcon>
                <AddBox />
              </ListItemIcon>
              <ListItemText primary={"ADD STATE"} />
            </ListItem>

            <ListItem button key={"text"}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"LogOut"} />
            </ListItem>
          </List>
        </Drawer>
      </Box>

      {compState.addState === true && (
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            left: "0px",
            top: "0px",
            background: "rgb(0,0,0,0.5)",
            zIndex: "1000",
          }}
        >
          <div
            style={{
              // height: "200px",
              // background: "white",
              width: "80%",
              marginLeft: "13%",
              marginTop: "20px",
              position: "relative",
            }}
          >
            <form
              className="addModalForm"
              onSubmit={(e) => {
                e.preventDefault();
                createState()
              }}
            >
              <span
                onClick={() => {
                  close();
                }}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  fontSize: "",
                  color: "crimson",
                  cursor: "pointer",
                }}
              >
                <Cancel style={{ fontSize: "30px" }} />
              </span>
              <b>Add new state</b>
              <select style={formInput}
                onChange=
                {(e) => {
                  setSTATE(e.target.value);
                }}>
                <option value={null}>SELECT STATE TO ADD</option>
                <option value='Rivers'>Rivers State</option>
                <option value='Abia'>Abia State</option>
                <option value='Adamawa'>Adamawa State</option>
              </select>
              <input
                onChange={(e) => {
                  setHQR(e.target.value);
                }}
                value={hqr}
                style={formInput}
                placeholder="State headquater"
                type="text"
              />{" "}
              <input
                onChange={(e) => {
                  setADMIN(e.target.value);
                }}
                value={admin}
                style={formInput}
                placeholder="State administrator"
                type="text"
              />{" "}
              <input
                onChange={(e) => {
                  setADMINCONTACT(e.target.value);
                }}
                value={admincontact}
                style={formInput}
                placeholder="Administrator's contact"
                type="text"
              />{" "}
              <textarea
                onChange={(e) => {
                  setSTATEDESC(e.target.value);
                }}
                value={statedesc}
                style={{
                  width: "90%",
                  height: "100px",
                  padding: "10px",
                  borderRadius: "6px",
                  border: "none",
                  outline: "none",
                  resize: "none",
                }}
                placeholder="Add additional information about the state"
              ></textarea>
              <input style={formInputSubmit} value="Add State" type="submit" />{" "}
            </form>
          </div>
        </div>
      )}
    </>
  );
}


const mapStateToProps = (state) => {
  return {
    appState: state.user,
  };
};

const mapDispatchToProps = (dispatch, encoded) => {
  return { 
    dispStates: (payload) => dispatch(disp_states(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MiniDrawer);