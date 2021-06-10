import {
  Checkbox,
  Grid,
  IconButton,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  withStyles,
} from "@material-ui/core";
import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  actionicon: {
    marginLeft: "10px",
    "&:hover": {
      color: "red",
    },
  },
  head: {
    backgroundColor: "#ffa88a",
  },
  body: {
    fontSize: "18px",
  },
  table: {
    minWidth: "750px",
    border: "0px",
  },
}));
const StyledTableCell = withStyles((theme) => ({
  root: {
    borderBottom: "none",
    fontSize: "16px",
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#fffbf2",
      "&:hover": {
        backgroundColor: "rgba(0, 0, 0, 0.04)",
      },
      "&:select": {
        backgroundColor: "red",
      },
    },
  },
}))(TableRow);

function Custumizedtable(props) {
  const { data } = props;
  const classes = useStyles();

  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("userid");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const headCells = [
    {
      id: "userid",
      align: "left",
      padding: false,
      label: "User Id",
    },
    {
      id: "name",
      align: "left",
      padding: true,
      label: "Name",
    },
    {
      id: "email",
      align: "left",
      padding: true,
      label: "E-Mail",
    },
    {
      id: "design",
      align: "left",
      padding: true,
      label: "Designation",
    },
    {
      id: "phone",
      align: "right",
      padding: false,
      label: "Phone No.",
    },
  ];

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };
  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const createSortHandler = (property) => (event) => {
    handleRequestSort(event, property);
  };
  function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }
  function getComparator(order, orderBy) {
    return order === "desc"
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
  }
  function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
  }
  const TableRowOnPage = () => {
    let setrow = [];
    if (data.length > 99) {
      setrow = [5, 10, 25, 50, 100];
    } else if (data.length > 49) {
      setrow = [5, 10, 25, 50];
    } else if (data.length > 24) {
      setrow = [5, 10, 25];
    } else setrow = [5, 10];

    return setrow;
  };
  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.userid);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };
  const viewclick = (e, id) => {
    var data = [id];
  };
  const tableFooter = () => {
    if (selected.length === 0) {
      return "Status";
    } else {
      return (
        <>
          <Grid item>
            <IconButton size="small">
              <DeleteIcon style={{ fontSize: "28px" }} color="secondary" />
            </IconButton>
            <IconButton size="small">
              <VisibilityIcon style={{ fontSize: "28px" }} color="secondary" />
            </IconButton>
          </Grid>
        </>
      );
    }
  };
  const rowcell = (row) => {
    if (selected.length < 2) {
      return (
        <>
          <Checkbox
            size="small"
            checkedIcon={<VisibilityIcon fontSize="medium" />}
            icon={<VisibilityOffIcon fontSize="medium" />}
            checked={row.vis}
            onChange={(event) => viewclick(event, row.userid)}
          ></Checkbox>
          <Checkbox
            size="small"
            checkedIcon={<EditIcon fontSize="medium" />}
            icon={<EditIcon fontSize="medium" />}
            checked
            // onChange={(event) =>
            //   viewclick(event, row.userid)
            // }
          ></Checkbox>
        </>
      );
    } else {
      return (
        <>
          <Checkbox
            size="small"
            checkedIcon={<VisibilityIcon fontSize="medium" />}
            icon={<VisibilityOffIcon fontSize="medium" />}
            checked={row.vis}
            disabled
            onChange={(event) => viewclick(event, row.userid)}
          ></Checkbox>
          <Checkbox
            size="small"
            checkedIcon={<EditIcon fontSize="medium" />}
            icon={<EditIcon fontSize="medium" />}
            checked
            disabled
            // onChange={(event) =>
            //   viewclick(event, row.userid)
            // }
          ></Checkbox>
        </>
      );
    }
  };
  const isSelected = (name) => selected.indexOf(name) !== -1;
  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

  return (
    <>
      <TableContainer
        component={Paper}
        elevation={0}
        style={{ marginTop: "20px", width: "100%" }}
      >
        <Table className={classes.table} size={"small"}>
          <TableHead className={classes.head}>
            <TableRow style={{ height: "50px" }}>
              <TableCell padding="checkbox">
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < data.length
                  }
                  checked={data.length > 0 && selected.length === data.length}
                  onChange={handleSelectAllClick}
                  // inputProps={{ "aria-label": "select all desserts" }}
                />
              </TableCell>
              {headCells.map((headCell) => (
                <>
                  <TableCell
                    key={headCell.id}
                    align={headCell.align}
                    padding={headCell.padding ? "none" : "default"}
                    sortDirection={orderBy === headCell.id ? order : false}
                  >
                    <TableSortLabel
                      active={orderBy === headCell.id}
                      direction={orderBy === headCell.id ? order : "asc"}
                      onClick={createSortHandler(headCell.id)}
                    >
                      {headCell.label}
                    </TableSortLabel>
                  </TableCell>
                </>
              ))}
              {/* <Grid>{tableFooter()}</Grid> */}
              <TableCell align="right" style={{ minWidth: "130px" }}>
                {tableFooter()}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody className={classes.body}>
            {stableSort(data, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.userid);
                const labelId = `enhanced-table-checkbox-${index}`;
                var bgcolor = "";
                if (isItemSelected) {
                  {
                    var bgcolor = " rgba(245, 0, 87, 0.08)";
                  }
                } else {
                  bgcolor = "";
                }

                return (
                  <>
                    <StyledTableRow
                      hover
                      role="checkbox"
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.userid}
                      selected={isItemSelected}
                      onClick={(event) => handleClick(event, row.userid)}
                      onDoubleClick={(event) => viewclick(event, row.userid)}
                      style={{ backgroundColor: bgcolor }}
                    >
                      <StyledTableCell padding="checkbox">
                        <Checkbox
                          checked={isItemSelected}
                          inputProps={{ "aria-labelledby": labelId }}
                        />
                      </StyledTableCell>
                      <StyledTableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                      >
                        {row.userid}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.name}</StyledTableCell>
                      <StyledTableCell align="left">
                        {row.email}
                      </StyledTableCell>
                      <StyledTableCell align="left">{row.degi}</StyledTableCell>
                      <StyledTableCell align="right">
                        {row.phone}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        <Grid item>{rowcell(row)}</Grid>
                      </StyledTableCell>
                    </StyledTableRow>
                  </>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      {data.length > 4 && (
        <TablePagination
          rowsPerPageOptions={TableRowOnPage()}
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      )}
    </>
  );
}

export default Custumizedtable;
