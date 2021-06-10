import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loginUser } from "../Redux/Users/Usersactions";
import {
  Grid,
  ListItemText,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const styles = makeStyles({
  cstpaper: {
    background: "linear-gradient(to right bottom, #ff9b44 0%, #fc6075 100%)",
    padding: "5px",

    overflow: "hidden",
  },
  textcolor: {
    color: "white",
  },
});

function Loginplate({ userdata, loginUser }) {
  const classes = styles();

  useEffect(() => {
    loginUser();
  }, []);
  return userdata.loading ? (
    <h2>loading</h2>
  ) : userdata.loginerror ? (
    <h2>{userdata.loginerror}</h2>
  ) : (
    <div style={{ padding: "5px 5px" }}>
      <>
        <Grid>
          <Paper className={classes.cstpaper} elevation={3}>
            <Grid container wrap="nowrap" spacing={2}>
              <Grid item style={{ paddingBottom: "5px" }}>
                {/* <AccountCircleIcon
                  style={{
                    fontSize: "50px",
                    padding: "0px",
                    margin: "0px",
                    border: "white solid 2px",
                    borderRadius: "25px",
                  }}
                /> */}
                <img
                  src="./img/user.png"
                  style={{ width: "50px", padding: "0px" }}
                ></img>
              </Grid>
              <Grid
                xs
                item
                zeroMinWidth
                style={{ paddingTop: "8px", paddingLeft: "5px" }}
              >
                <Typography
                  noWrap
                  variant={"body1"}
                  className={classes.textcolor}
                  style={{ paddingBottom: "2px" }}
                >
                  {userdata.loginuser.name}
                </Typography>
                <div
                  style={{
                    width: "90%",
                    height: "1px",
                    backgroundColor: "white",
                  }}
                ></div>
                <Typography
                  noWrap
                  variant={"caption"}
                  className={classes.textcolor}
                >
                  {userdata.loginuser.email}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userdata: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: () => dispatch(loginUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Loginplate);
