import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import { connect } from "react-redux";
import { sideBtnNormal, sideBtnRotate } from "../Redux";
import { makeStyles, CssBaseline } from "@material-ui/core";

const Page0 = lazy(() => import("../page/mainpage"));
const Page1 = lazy(() => import("../page/notification"));
const Page2 = lazy(() => import("../page/chat"));
const Page3 = lazy(() => import("../page/profile"));
const Page4 = lazy(() => import("../page/settings"));
const Page5 = lazy(() => import("../page/admindsh"));
const Page6 = lazy(() => import("../page/employeedsh"));

const usestyles = makeStyles({
  pagesize: {
    width: "100%",
    height: "100vh",
    padding: "0px",
    margin: "0px",
    backgroundColor: "#eaeef3",
    position: "relative",
    // overflow: "hidden",
  },
  navroot: {
    width: "100%",
    top: "0px",
    position: "absolute",
    // maxHeight: "105px",
    // overflow: "hidden",
    // "@media (max-width:1920px)": {
    //   maxHeight: "55px",
    // },
    // "@media (max-width:1280px)": {
    //   maxHeight: "50px",
    // },
  },
  Mainroot: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "row",
    margin: "0px",
    padding: "0px",
    paddingTop: "65px",
  },
  Sidebarroot: {
    // width: "100%",
    height: "100%",
    minWidth: "70px",
    maxWidth: "400px",
    // overflow: "hidden",
    webkitTransition: `width .3s linear`,
    transition: `width .3s linear`,
  },
  rightpage: {
    width: "100%",
    height: "100%",
    padding: "25px",
    overflowY: "scroll",
    // backgroundColor: "red",
  },
});

function pagecointainer({ swidth }) {
  const classes = usestyles();
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <div className={classes.pagesize}>
            <div className={classes.navroot}>
              <Navbar />
            </div>
            <div className={classes.Mainroot}>
              <div className={classes.Sidebarroot} style={{ width: swidth }}>
                <Sidebar />
              </div>
              <div className={classes.rightpage}>
                <Switch>
                  <Route exact path="/" component={Page0} />
                  <Route exact path="/home" component={Page0} />
                  <Route exact path="/noty" component={Page1} />
                  <Route exact path="/chat" component={Page2} />
                  <Route exact path="/profile" component={Page3} />
                  <Route exact path="/settings" component={Page4} />
                  <Route exact path="/admindsh" component={Page5} />
                  <Route exact path="/employeedsh" component={Page6} />
                </Switch>
              </div>
            </div>
          </div>
        </Suspense>
      </Router>
      <CssBaseline />
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    swidth: state.comps.swidth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sideBtnRotate: () => dispatch(sideBtnRotate()),
    sideBtnNormal: () => dispatch(sideBtnNormal()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(pagecointainer);
