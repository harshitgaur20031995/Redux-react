import { Breadcrumbs, makeStyles, Paper, Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";

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

function Mainpage() {
  const classes = useStyles();
  return (
    <>
      <div>
        {/* <Paper style={{ width: "300px", padding: "10px" }}> */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link to="/home" color="error" className={classes.link}>
            <HomeIcon className={classes.icon} />
            Meest
          </Link>
          <Typography color="error" className={classes.link}>
            <GrainIcon className={classes.icon} />
            Breadcrumb
          </Typography>
        </Breadcrumbs>
        {/* </Paper> */}
        <h1 style={{ textAlign: "center", padding: "10px" }}>
          Welcome to main page
        </h1>
      </div>
    </>
  );
}

export default Mainpage;
