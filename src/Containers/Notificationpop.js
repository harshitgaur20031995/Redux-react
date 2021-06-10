import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Avatar,
  Badge,
  IconButton,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Menu,
  MenuItem,
  Typography,
  withStyles,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { fetchAllNoty } from "../Redux/Active/ActiveAction";
import NotificationsIcon from "@material-ui/icons/Notifications";

const usestyles = makeStyles({
  iconsize: {
    fontSize: "40px",
    "@media (max-width:1920px)": {
      fontSize: "32px",
    },
    "@media (max-width:1280px)": {
      fontSize: "28px",
    },
  },
});

const StyledMenu = withStyles({})((props) => (
  <Menu
    elevation={3}
    getContentAnchorEl={null}
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

function Notificationpop({ fetchAllNoty, usernoty }) {
  const classes = usestyles();
  var notificationbadge = null;

  if (usernoty.notybadge > 0) {
    notificationbadge = usernoty.notybadge;
  } else {
    notificationbadge = null;
  }

  const notificationbadgecolor = "secondary";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [El, setEl] = React.useState(null);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    console.log("fetchAllNoty", fetchAllNoty());
    fetchAllNoty();
  }, []);

  function trimlength(e, t) {
    if (e != null) {
      let length = e.length;
      if (length < t) {
        return e;
      } else {
        return (e = e.substr(0, t) + "...");
      }
    } else {
      return e;
    }
  }

  const data = usernoty.notyData.map((val) => {
    return (
      <>
        <StyledMenuItem>
          <ListItemAvatar>
            <Avatar>
              <AccountCircleIcon fontSize="large" />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={trimlength(val.subject, 28)}
            secondary={trimlength(val.body, 35)}
          />
        </StyledMenuItem>
      </>
    );
  });
  return (
    <>
      <IconButton onClick={handleClick1}>
        <Badge badgeContent={notificationbadge} color={notificationbadgecolor}>
          <NotificationsIcon className={classes.iconsize} />
        </Badge>
      </IconButton>

      <StyledMenu
        id="customized-notify"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div style={{ width: "350px" }}>
          <Typography align="center" color="error">
            New Notifications
          </Typography>
          {data}
        </div>
      </StyledMenu>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    usernoty: state.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllNoty: () => dispatch(fetchAllNoty()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Notificationpop);
