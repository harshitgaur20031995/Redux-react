import {
  Avatar,
  Breadcrumbs,
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import Admintable from "../Components/admintable";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import ChartTotalUser from "../Components/ChartTotalUser";
import ChartUserChange from "../Components/ChartUserChange";
import ChartUsersType from "../Components/ChartUsersType";
import ChartTypeChange from "../Components/ChartTypeChange";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    fontSize: "18px",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: "25px",
    height: "25px",
  },
  infocards: {
    width: "100%",
    height: "150px",
    minWidth: "220px",
  },
}));

const initialFValues = {
  id: 0,
  subject: "",
  body: "",
};

const Infopaper = (props) => {
  const { period, dec, inc } = props;
  const classes = useStyles();
  return (
    <>
      <Paper elevation={3} className={classes.infocards}>
        <Grid container>
          <Grid item xs={6}>
            <img
              src="./img/user-male.png"
              style={{ height: "144px", padding: "0px" }}
            ></img>
          </Grid>

          <Grid
            item
            xs={6}
            // style={{ minWidth: "100px", backgroundColor: "grey" }}
          >
            <Typography
              variant="h4"
              align="center"
              color="primary"
              style={{ paddingTop: "20px", color: "green" }}
            >
              <ArrowUpwardIcon style={{ fontSize: "32px", color: "green" }} />
              {dec + inc}
            </Typography>
            <Typography
              variant="h6"
              align="center"
              style={{ fontSize: "15px" }}
            >
              <ArrowUpwardIcon style={{ fontSize: "15px", color: "green" }} />
              {inc}
              <ArrowDownwardIcon
                style={{
                  marginLeft: "10px",
                  fontSize: "15px",
                  color: "red",
                }}
              />
              {dec}
            </Typography>
            <Typography variant="h6" align="center" color="primary">
              {period}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

function Notification() {
  const classes = useStyles();

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="error" className={classes.link}>
          <HomeIcon className={classes.icon} />
          Meest
        </Link>
        <Link color="error" className={classes.link}>
          <HomeIcon className={classes.icon} />
          Dashboard
        </Link>
        <Typography color="error" className={classes.link}>
          <GrainIcon className={classes.icon} />
          Admin
        </Typography>
      </Breadcrumbs>

      <Typography variant="h4" align="center" style={{ fontWeight: "bold" }}>
        Welcome To Admin Dashboard
      </Typography>

      <Grid
        container
        style={{ padding: "25px 0px" }}
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item xs={3} style={{ paddingRight: "18.5px" }}>
          <Infopaper period="Total" dec={50} inc={1000} />
        </Grid>
        <Grid
          item
          xs={3}
          style={{ paddingLeft: "6.5px", paddingRight: "12px" }}
        >
          <Infopaper period="Month" dec={35} inc={600} />
        </Grid>
        <Grid
          item
          xs={3}
          style={{ paddingLeft: "12px", paddingRight: "6.5px" }}
        >
          <Infopaper period="Week" dec={10} inc={100} />
        </Grid>
        <Grid item xs={3} style={{ paddingLeft: "18.5px" }}>
          <Infopaper period="Today" dec={2} inc={10} />
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper style={{ padding: "20px" }}>
            <ChartTotalUser />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ padding: "20px" }}>
            <ChartUserChange />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ padding: "20px" }}>
            <ChartTypeChange />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ padding: "20px" }}>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item xs={6}>
                <ChartUsersType />
              </Grid>
              <Grid item xs></Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Admintable />
        </Grid>
      </Grid>
    </div>
  );
}

export default Notification;
