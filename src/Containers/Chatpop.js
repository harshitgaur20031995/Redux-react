import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { fetchAllChat } from "../Redux";
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
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
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";

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

function Chatpop({ fetchAllChat, userchat }) {
  const classes = usestyles();
  var chatbadge = null;
  console.log(userchat);

  if (userchat.chatbadge > 0) {
    chatbadge = userchat.chatbadge;
  } else {
    chatbadge = null;
  }
  console.log(chatbadge);

  const chatbadgecolor = "primary";

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [El, setEl] = React.useState(null);
  const handleClick1 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    fetchAllChat();
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

  const data = userchat.chatData.map((val) => {
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
        <Badge badgeContent={chatbadge} color={chatbadgecolor}>
          <ChatBubbleIcon className={classes.iconsize} />
        </Badge>
      </IconButton>

      <StyledMenu
        id="customized-chat"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <div style={{ width: "350px" }}>
          <Typography align="center" color="error">
            Recents Chat
          </Typography>
          {data}
        </div>
      </StyledMenu>
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    userchat: state.active,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllChat: () => dispatch(fetchAllChat()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chatpop);
