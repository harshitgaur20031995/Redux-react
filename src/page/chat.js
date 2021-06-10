import { Breadcrumbs, Button, makeStyles, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import GrainIcon from "@material-ui/icons/Grain";

import TestChatForm from "../Containers/TestChatForm";

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
          Apps
        </Link>
        <Typography color="error" className={classes.link}>
          <GrainIcon className={classes.icon} />
          Chat
        </Typography>
      </Breadcrumbs>

      <Typography
        variant="h4"
        align="center"
        style={{ padding: "10px", fontWeight: "bold" }}
      >
        Welcome To Chat Page
      </Typography>
      <TestChatForm />
    </div>
  );
}

export default Notification;
