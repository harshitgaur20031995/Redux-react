import React, { useState } from "react";
import {
  Backdrop,
  Button,
  Fade,
  Grid,
  IconButton,
  makeStyles,
  MenuItem,
  Modal,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import ViewModuleIcon from "@material-ui/icons/ViewModule";
import ViewListIcon from "@material-ui/icons/ViewList";
import Custumizedtable from "./Custumizedtable";
import MoadalUserForm from "./MoadalUserForm";

const useStyles = makeStyles((theme) => ({
  searchfeild: {
    width: "100%",
    marginTop: "5px",
  },
  seicon: {
    opacity: "0.6",
    // "&:hover": {
    //   opacity: "1",
    // },
  },
  modalAdd: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paperAdd: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const rows = [
  {
    userid: 1,
    name: "atul",
    email: "atulsolanki@gmail.com",
    degi: "admin",
    phone: "0123456789",
    vis: false,
  },
  {
    userid: 2,
    name: "abc",
    email: "abc@abc.abc",
    degi: "employee",
    phone: "1234567890",
    vis: true,
  },
  {
    userid: 3,
    name: "xyz",
    email: "xyz@xyz.xyz",
    degi: "visitor",
    phone: "9999999999",
    vis: true,
  },
  {
    userid: 4,
    name: "test",
    email: "test@test.com",
    degi: "admin",
    phone: "92349823948",
    vis: true,
  },
  {
    userid: 5,
    name: "sdasd",
    email: "asdasdas",
    degi: "admin",
    phone: "3242342342",
    vis: false,
  },
];

const initialSValues = {
  search: "",
  designation: "",
};

function Admintable() {
  const classes = useStyles();

  const [sval, setsval] = useState(initialSValues);
  const [userSData, setuserSData] = useState(rows);
  const [openAdd, setOpenAdd] = React.useState(false);
  const [b1viewicon, setb1viewicon] = React.useState("");
  const [b2viewicon, setb2viewicon] = React.useState("rgb(249 234 234)");

  const inputChange = (e) => {
    const { name, value } = e.target;
    setsval({
      ...sval,
      [name]: value,
    });
  };

  const ViewData = (rows) => {
    var sdata = [];
    var Ddata = [];

    if (sval.designation === "") {
      Ddata = rows;
    } else if (sval.designation != "") {
      let val = sval.designation.toLowerCase();
      let matches = [];
      matches = rows.filter((v) => v.degi.toLowerCase().includes(val));
      Ddata = matches;
    }
    if (sval.search === "" || sval.search === " ") {
      sdata = Ddata;
    } else if (sval.search != "" || sval.search != " ") {
      let val = sval.search.toLowerCase();
      let matches = [];
      matches = Ddata.filter((v) => v.name.toLowerCase().includes(val));
      sdata = matches;
    }

    if (b2viewicon != "") {
      return (
        <>
          <Custumizedtable data={sdata} />
        </>
      );
    } else if (b1viewicon != "") {
      return (
        <>
          <Grid container></Grid>
        </>
      );
    }
  };

  const handleOpenAdd = () => {
    setOpenAdd(true);
  };

  const gridview = () => {
    setb1viewicon("rgb(249 234 234)");
    setb2viewicon("");
  };
  const tableview = () => {
    setb1viewicon("");
    setb2viewicon("rgb(249 234 234)");
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
  };

  return (
    <>
      <Paper elevation={3} style={{ padding: "10px" }}>
        <Grid container style={{ paddingBottom: "10px" }}>
          <Grid item style={{ width: "100%", paddingLeft: "20px" }}>
            <Typography variant="h5" color="secondary">
              Users Table
            </Typography>
          </Grid>
          <Grid item xs></Grid>
          <Grid></Grid>
        </Grid>
        <Grid container>
          <Grid item xs={4} style={{ paddingRight: "10px" }}>
            <TextField
              id="outlined-required"
              label="Search"
              value={sval.search}
              className={classes.searchfeild}
              variant="outlined"
              size="small"
              name="search"
              onChange={inputChange}
            ></TextField>
          </Grid>
          <Grid item xs={3} style={{ paddingLeft: "10px" }}>
            <TextField
              id="searchTextField"
              className={classes.searchfeild}
              variant="outlined"
              label="Designation"
              name="designation"
              size="small"
              select
              defaultValue=""
              onChange={inputChange}

              //   value={age}
              //   onChange={handleChange}
            >
              <MenuItem value="">
                <em>All Type</em>
              </MenuItem>
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="Employee">Employee</MenuItem>
              <MenuItem value="Visitor">Visitor</MenuItem>
            </TextField>
          </Grid>
          <Grid item xs></Grid>
          <Grid
            item
            xs={4}
            container
            direction="row"
            justify="flex-end"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <IconButton
                style={{ backgroundColor: b1viewicon }}
                onClick={gridview}
              >
                <ViewModuleIcon color="secondary" />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                style={{ backgroundColor: b2viewicon }}
                onClick={tableview}
                color="secondary"
              >
                <ViewListIcon style={{ fontWeight: "bolder" }} />
              </IconButton>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                onClick={handleOpenAdd}
                style={{ backgroundColor: "#28a745", color: "white" }}
              >
                + Add User
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modalAdd}
                open={openAdd}
                onClose={handleCloseAdd}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openAdd}>
                  <MoadalUserForm />
                </Fade>
              </Modal>
            </Grid>
          </Grid>
        </Grid>
        {ViewData(userSData)}
      </Paper>
    </>
  );
}

export default Admintable;
