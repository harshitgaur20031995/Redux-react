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

function Settings() {
  const classes = useStyles();
  return (
    <>
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="error" className={classes.link}>
            <HomeIcon className={classes.icon} />
            Meest
          </Link>
          <Typography color="error" className={classes.link}>
            <GrainIcon className={classes.icon} />
            User Settings
          </Typography>
        </Breadcrumbs>

        <Typography
          variant="h4"
          align="center"
          style={{ padding: "10px", fontWeight: "bold" }}
        >
          Welcome To My Settings Page
        </Typography>
      </div>
    </>
  );
}

export default Settings;
