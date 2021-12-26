import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useHistory, useParams } from "react-router-dom";


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


const drawerWidth = 200;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const history = useHistory()
  // onClick={handleDrawerOpen}
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline /> 
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          {open == true ?
          <IconButton onClick={handleDrawerClose}> 
              <ChevronLeftIcon />
            </IconButton> 
            :
            <IconButton onClick={handleDrawerOpen}> 
              <ChevronRightIcon />
            </IconButton> 
          }
          
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem button key={'text'}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Home"} />
          </ListItem>
          
          <ListItem button  onClick={()=>{history.push("/states")}}key={'text'}>
              <ListItemIcon>
                <HomeWork />
              </ListItemIcon>
              <ListItemText primary={"States"} />
          </ListItem>
          
          <ListItem button key={'text'}>
              <ListItemIcon>
                <OtherHouses />
              </ListItemIcon>
              <ListItemText primary={"Districts"} />
          </ListItem>
          

          <ListItem button key={'text'}>
              <ListItemIcon>
                 <House />
              </ListItemIcon>
              <ListItemText primary={"Areas"} />
            </ListItem>


            <ListItem button key={'text'}>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary={"Zones"} />
            </ListItem>

          
          <ListItem button key={'text'}>
              <ListItemIcon>
               <HouseSiding />
              </ListItemIcon>
              <ListItemText primary={"Bethels"} />
          </ListItem>
          
        </List>
        <Divider />
        <List>
         
          <ListItem button key={'text'}>
              <ListItemIcon>
                 <VpnKey />
              </ListItemIcon>
              <ListItemText primary={"Admin Access"} />
          </ListItem>

          <ListItem button key={'text'}>
              <ListItemIcon>
                <AddBox />
              </ListItemIcon>
              <ListItemText primary={"ADD EVENT"} />
          </ListItem>

          <ListItem button key={'text'}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"LogOut"} />
          </ListItem> 

        </List>
      </Drawer> 
    </Box>
  );
}