import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";

import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Sidebtncontainer from "../Containers/sidebtncontainer";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from "@material-ui/icons/Person";
import SettingsIcon from "@material-ui/icons/Settings";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import Notificationpop from "../Containers/Notificationpop";
import Chatpop from "../Containers/Chatpop";
import { Link } from "react-router-dom";

const usestyles = makeStyles({
  Navbarroot: {
    backgroundColor: "white",
    // height: "65px",
    // overflow: "hidden",
    // "@media (max-width:1920px)": {
    //   height: "55px",
    // },
    // "@media (max-width:1280px)": {
    //   height: "50px",
    // },
  },
  iconsize: {
    fontSize: "40px",
    "@media (max-width:1920px)": {
      fontSize: "32px",
    },
    "@media (max-width:1280px)": {
      fontSize: "28px",
    },
  },
  navhead: {
    paddingLeft: "20px",
    margin: "0px",
    marginLeft: "20px",

    lineHeight: "1.6",
    fontFamily: ` "RocknRoll One", sans-serif`,
    background: `-webkit-linear-gradient(
      #fd8817 10%,
      #f9752a 20%,
      #f8573f 30%,
      #fb3b52 40%,
      #fb2761 50%,
      #eb0982 60%,
      #c1188d 70%,
      #9b1ba4 80%,
      #6e1dc0 90%,
      #5321ce 100%
    )`,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    fontSize: "40px",
    "@media (max-width:1920px)": {
      fontSize: "34px",
    },
    "@media (max-width:1280px)": {
      fontSize: "30px",
    },
  },
  Menusize: {
    width: "350px",
  },
  linktext: {
    color: "black",
    textDecoration: "none",
  },
});

const StyledMenu = withStyles({})((props) => (
  <Menu
    elevation={3}
    getContentAnchorEl={null}
    // getContentAnchorE2={null}
    // getContentAnchorE3={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(() => ({
  root: {
    "&:focus": {
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {},
    },
  },
}))(MenuItem);

function Navbar() {
  const chatbadge = "3";
  const chatbadgecolor = "primary";

  const classes = usestyles();

  const [anchorE2, setAnchorE2] = React.useState(null);
  const [anchorE3, setAnchorE3] = React.useState(null);

  const handleClick2 = (event) => {
    setAnchorE2(event.currentTarget);
  };
  const handleClick3 = (event) => {
    setAnchorE3(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorE2(null);
    setAnchorE3(null);
  };

  return (
    <>
      <AppBar position="static" className={classes.Navbarroot}>
        <Toolbar className={classes.Navbarroot}>
          <Grid container>
            <Sidebtncontainer cls={classes.iconsize} />
            <Grid>
              {/* <img className={classes.navlogo} src="./img/logo.png" /> */}
              <h4 className={classes.navhead}>Meest</h4>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Notificationpop />
              <Chatpop />

              <IconButton onClick={handleClick3}>
                <AccountCircleIcon className={classes.iconsize} />
              </IconButton>

              <StyledMenu
                id="customized-profile"
                anchorEl={anchorE3}
                keepMounted
                open={Boolean(anchorE3)}
                onClose={handleClose}
              >
                <Link to="/profile" className={classes.linktext}>
                  <StyledMenuItem>
                    <ListItemIcon>
                      <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                  </StyledMenuItem>
                </Link>
                <Link to="/settings" className={classes.linktext}>
                  <StyledMenuItem>
                    <ListItemIcon>
                      <SettingsIcon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                  </StyledMenuItem>
                </Link>

                <StyledMenuItem>
                  <ListItemIcon>
                    <PowerSettingsNewIcon fontSize="small" />
                  </ListItemIcon>
                  <ListItemText primary="Sign Out" />
                </StyledMenuItem>
              </StyledMenu>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}
export default Navbar;
