import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import GrainIcon from "@material-ui/icons/Grain";
import { Breadcrumbs, makeStyles, Paper, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
    fontSize: "16px",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: "16px",
    height: "16px",
  },
}));

export default function Breadcrumb(props) {
  const { name } = props;
  const classes = useStyles();
  return (
    <div>
      {/* <Paper style={{ width: "300px", padding: "10px" }}> */}
      <Breadcrumbs aria-label="breadcrumb">
        <Link color="error" className={classes.link}>
          <HomeIcon className={classes.icon} />
          Meest
        </Link>
        <Typography color="error" className={classes.link}>
          <GrainIcon className={classes.icon} />
          {name}
        </Typography>
      </Breadcrumbs>
      {/* </Paper> */}
    </div>
  );
}
