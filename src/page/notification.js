import { Breadcrumbs, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import GrainIcon from "@material-ui/icons/Grain";
import TestNotyForm from "../Containers/TestNotyForm";

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
}));

function Notification() {
  const classes = useStyles();

  return (
    <div>
      <Breadcrumbs aria-label="breadcrumb">
        <Link to="/home" color="error" className={classes.link}>
          <HomeIcon className={classes.icon} />
          Meest
        </Link>
        <Link to="/home" color="error" className={classes.link}>
          <HomeIcon className={classes.icon} />
          Apps
        </Link>
        <Typography color="error" className={classes.link}>
          <GrainIcon className={classes.icon} />
          Notification
        </Typography>
      </Breadcrumbs>

      <Typography
        variant="h4"
        align="center"
        style={{ padding: "10px", fontWeight: "bold" }}
      >
        Welcome To Notification Page
      </Typography>
      <TestNotyForm />
    </div>
  );
}

export default Notification;
