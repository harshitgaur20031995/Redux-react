import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import {
  Button,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import RefreshIcon from "@material-ui/icons/Refresh";
import { insertNoty } from "../Redux";

const useStyles = makeStyles((theme) => ({
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

function TestNotyForm({ insertNoty }) {
  const classes = useStyles();
  const [fval, setfval] = useState(initialFValues);
  const [verror, seterror] = useState({});

  const inputChange = (e) => {
    const { name, value } = e.target;
    setfval({
      ...fval,
      [name]: value,
    });
  };

  const refreshform = () => {
    setfval(initialFValues);
    seterror({});
  };

  const validate = () => {
    let temp = {};
    temp.subject = fval.subject ? "" : "Feild value cannot be empty";
    temp.body = fval.body ? "" : "Feild value cannot be empty";
    temp.error1 = temp.subject ? true : false;
    temp.error2 = temp.body ? true : false;

    seterror({
      ...temp,
    });

    return Object.values(temp).every((x) => x == "");
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      insertNoty(fval);
      refreshform();
    }
  };

  return (
    <>
      <Paper elevation={3} style={{ width: "50%", padding: "10px" }}>
        <Typography
          variant="h5"
          align="center"
          color="error"
          style={{ paddingBottom: "10px" }}
        >
          Test Notification
        </Typography>
        <form className={classes.root} onSubmit={formSubmit}>
          <Grid>
            <Grid item>
              <TextField
                id="outlined-required"
                label="Subject"
                value={fval.subject}
                variant="outlined"
                size="small"
                name="subject"
                onChange={inputChange}
                {...{ error: verror.error1, helperText: verror.subject }}
              />
            </Grid>
            <Grid item>
              <TextField
                id="outlined-required"
                label="Body"
                value={fval.body}
                variant="outlined"
                size="small"
                name="body"
                onChange={inputChange}
                {...{ error: verror.error2, helperText: verror.body }}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
          >
            <Grid item style={{ paddingTop: "10px" }}>
              <IconButton
                style={{ marginRight: "10px" }}
                color="primary"
                onClick={refreshform}
              >
                <RefreshIcon />
              </IconButton>
              <Button
                variant="contained"
                color="secondary"
                type="submit"
                startIcon={<NotificationsIcon />}
              >
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertNoty: (fval) => dispatch(insertNoty(fval)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TestNotyForm);
