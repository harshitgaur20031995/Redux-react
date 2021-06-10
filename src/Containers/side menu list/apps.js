import React, { useEffect, useState } from "react";
import { ListItemSecondaryAction, makeStyles } from "@material-ui/core";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import RedditIcon from "@material-ui/icons/Reddit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import { listMenuOpen, sideBtnNormal, sideBtnRotate } from "../../Redux";
import AppsRoundedIcon from "@material-ui/icons/AppsRounded";
import { Route } from "react-router";
import { Link } from "react-router-dom";

const styles = makeStyles({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    left: "0px",
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    zIndex: "101",
    overflow: "hidden",
    transitionDuration: "1s",
  },

  navlogo: {
    marginTop: "3px",
    marginBottom: "3px",
    height: "59px",
    overflow: "hidden",
    "@media (max-width:1920px)": {
      height: "49px",
    },
    "@media (max-width:1280px)": {
      height: "44px",
    },
  },
  secicon: {
    transition: `0.3s linear`,
  },
  seclist: {
    margin: "0px",
    padding: "0px",
    backgroundColor: "#f9eaea",
    overflow: "hidden",
    webkitTransition: `0.3s linear`,
    transition: `0.3s linear`,
    height: "100px",
  },
  linktext: {
    color: "black",
    textDecoration: "none",
  },
});

function SideMenuList({
  sview,
  sdis,
  sval,
  dshlist,
  listactive,
  listMenuOpen,
}) {
  const classes = styles();

  const [dshview, setdshview] = useState(-1);
  const [dsharo, setdsharo] = useState("rotate(-90deg)");
  const [dshsec, setdshsec] = useState("0px");
  const [dshini, setdshini] = useState(false);
  const [click, setclick] = useState(true);

  const calheigh = (dshlist) => {
    let height = dshlist * 48;
    return height;
  };
  const listclick = () => {
    if (click) {
      if (dshview < 0) {
        openmenu();
        listMenuOpen("apps");
      } else if (dshview > 0) {
        closemenu();
      }
    }
  };

  const openmenu = () => {
    setdshview(1);
    setdsharo("rotate(0deg)");
    setdshsec(calheigh(dshlist));
  };
  const closemenu = () => {
    setdshview(-1);
    setdsharo("rotate(-90deg)");
    setdshsec("0px");
  };

  const handelclick = () => {
    if (sview) {
      setclick(false);
      if (dshview > 0) {
        setdshini(true);
        closemenu();
      }
    } else {
      setclick(true);
      if (dshini) {
        openmenu();
        setdshini(false);
      }
    }
  };

  const closeClick = () => {
    if (listactive === "apps") {
    } else {
      closemenu();
    }
  };

  useEffect(() => {
    closeClick();
  }, [listactive]);

  useEffect(() => {
    handelclick();
  }, [sview]);
  return (
    <>
      <ListItem button onClick={() => listclick()}>
        <ListItemIcon>
          <RedditIcon color="error" fontSize={sdis} />
        </ListItemIcon>
        <ListItemText primary="App" />
        <div style={{ display: sval }}>
          <ListItemSecondaryAction>
            <ExpandMoreIcon
              className={classes.secicon}
              style={{ transform: dsharo }}
            />
          </ListItemSecondaryAction>
        </div>
      </ListItem>

      <div className={classes.seclist} style={{ height: dshsec }}>
        <Link to="/noty" className={classes.linktext}>
          <ListItem button style={{ paddingLeft: "50px" }}>
            <ListItemIcon>
              <AppsRoundedIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Notifications" />
          </ListItem>
        </Link>
        <Link to="/chat" className={classes.linktext}>
          <ListItem button style={{ paddingLeft: "50px" }}>
            <ListItemIcon>
              <AppsRoundedIcon color="error" />
            </ListItemIcon>
            <ListItemText primary="Chats" />
          </ListItem>
        </Link>
      </div>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    sview: state.comps.view,
    sdis: state.comps.sdis,
    sval: state.comps.sval,
    dshlist: state.comps.dshlist,
    listactive: state.comps.listactive,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    listMenuOpen: (menu) => dispatch(listMenuOpen(menu)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideMenuList);
