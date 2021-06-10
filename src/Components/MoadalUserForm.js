import {
  Button,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useState } from "react";
import RefreshIcon from "@material-ui/icons/Refresh";
import AddIcon from "@material-ui/icons/Add";

const initialFValues = {
  name: "",
  email: "",
  pass: "",
  phone: "",
  designation: "",
};

function MoadalUserForm() {
  const [Fvalue, setFvalue] = useState(initialFValues);

  const inputChange = (e) => {
    const { name, value } = e.target;
    setFvalue({
      ...Fvalue,
      [name]: value,
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    // if (validate()) {
    //   insertChat(fval);
    //   refreshform();
    // }
    alert(Fvalue);
    console.log(Fvalue);
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

  return (
    <>
      <Paper elevation={3} style={{ padding: "25px", width: "600px" }}>
        <Typography
          variant="h4"
          align="center"
          style={{ paddingBottom: "20px" }}
        >
          User Form
        </Typography>
        <form onSubmit={formSubmit}>
          <Grid container style={{ width: "100%" }} spacing={3}>
            <Grid item sm={12}>
              <TextField
                id="outlined-required"
                label="Name"
                variant="outlined"
                size="small"
                name="name"
                fullWidth
                value={Fvalue.name}
                onChange={inputChange}
                // {...{
                //   error: verror.error1,
                //   helperText: verror.subject,
                // }}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="outlined-required"
                label="E-Mail"
                variant="outlined"
                size="small"
                name="email"
                fullWidth
                value={Fvalue.email}
                onChange={inputChange}
                // {...{ error: verror.error2, helperText: verror.body }}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="outlined-required"
                label="Password"
                variant="outlined"
                type="password"
                size="small"
                name="pass"
                fullWidth
                value={Fvalue.pass}
                onChange={inputChange}
                // {...{ error: verror.error2, helperText: verror.body }}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="outlined-required"
                label="Phone No."
                variant="outlined"
                type="number"
                size="small"
                name="phone"
                fullWidth
                value={Fvalue.phone}
                onChange={inputChange}
                // {...{ error: verror.error2, helperText: verror.body }}
              />
            </Grid>
            <Grid item sm={12}>
              <TextField
                id="searchTextField"
                variant="outlined"
                label="Designation"
                name="designation"
                size="small"
                fullWidth
                select
                defaultValue=""
                onChange={inputChange}
              >
                <MenuItem value="">
                  <em>All Type</em>
                </MenuItem>
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Employee">Employee</MenuItem>
                <MenuItem value="Visitor">Visitor</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Grid item align="right">
                <IconButton style={{ marginRight: "10px" }} color="primary">
                  <RefreshIcon />
                </IconButton>
                <Button
                  variant="contained"
                  color="secondary"
                  type="submit"
                  startIcon={<AddIcon />}
                >
                  Add User
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
}

export default MoadalUserForm;
