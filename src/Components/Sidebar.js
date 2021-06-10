import React from "react";
import { makeStyles } from "@material-ui/core";
import Dashboard from "../Containers/side menu list/dashboard";
import App from "../Containers/side menu list/apps";
import List from "@material-ui/core/List";
import LoginPlate from "../Containers/loginPlate";

const styles = makeStyles({
  sidebar: {
    display: "flex",
    flexDirection: "column",
    left: "0px",
    width: "100%",
    height: "100%",
    // backgroundColor: "#34444c",
    backgroundColor: "white",
    zIndex: "101",
    overflow: "hidden",
    transitionDuration: "1s",
    paddingTop: "10px",
  },
});

function Sidebar() {
  const classes = styles();
  return (
    <>
      <div className={classes.sidebar}>
        <LoginPlate />
        <List
          component="nav"
          aria-labelledby="nested-list-subheader"
          className={classes.root}
        >
          <Dashboard />
          <App />
        </List>
      </div>
    </>
  );
}

export default Sidebar;
