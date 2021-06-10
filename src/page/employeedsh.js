import {
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
import ChartTotalUser from "../Components/ChartTotalUser";
import ChartUserChange from "../Components/ChartUserChange";
import ChartUsersType from "../Components/ChartUsersType";

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
  root: {
    "& .MuiFormControl-root": {
      margin: theme.spacing(1),
      width: "100%",
    },
    paddingRight: "20px",
  },
}));

const initialFValues = {
  id: 0,
  subject: "",
  body: "",
};

function Notification() {
  const classes = useStyles();
  const [fval, setfval] = useState(initialFValues);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setfval({
      ...fval,
      [name]: value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();

    alert("data send");
  };

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
          Employee
        </Typography>
      </Breadcrumbs>

      <Typography
        variant="h4"
        align="center"
        style={{ padding: "10px", paddingBottom: "20px", fontWeight: "bold" }}
      >
        Welcome To Employee Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper style={{ padding: "20px" }}>
            <ChartTotalUser></ChartTotalUser>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ padding: "20px" }}>
            <ChartUserChange />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ padding: "20px" }}>
            <Grid container>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <ChartUsersType />
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Notification;
