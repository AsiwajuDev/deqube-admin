import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import Pagination from "@material-ui/lab/Pagination";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import * as Icon from "react-feather";

import Search from "./Search";

const iconComponent = (props) => {
  return (
    <Icon.ChevronDown
      className={props.className}
      style={{ color: "white", paddingRight: 5, paddingLeft: 5 }}
    />
  );
};

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  paginationContainer: {
    marginTop: 20,
    height: 32,
  },
  rowPageContainer: {
    height: "2px",
  },
});
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
    height: "10px",
  },
  input: {
    borderRadius: 4,
    position: "relative",

    backgroundColor: "#f50057", //theme.palette.background.paper,
    color: "#fff",
    border: "1px solid #ced4da",
    fontSize: "0.875rem",
    padding: "5px 26px 5px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      //borderColor: '#80bdff',
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor: "#f50057", //theme.palette.background.paper,
      color: "#fff",
    },
  },
}))(InputBase);

export default function CustomTable({
  pagination,
  search,
  pagerows,
  rows,
  columns,
  actions,
  handleLinkClick,
  handleActionClick,
}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [items, setItems] = React.useState(rows);
  const [count, setCount] = React.useState(items.length / rowsPerPage);
  const [filter, setFilter] = React.useState("Name");

  const handleChange = (event, value) => {
    setPage(value);
  };
  const handleChangeRowsPerPage = (event) => {
    setPage(1);
    setRowsPerPage(+event.target.value);
  };
  const handleSearchChange = (event) => {
    let value = event.target.value.toLowerCase();
    if (value) {
      let search = rows.filter((item) =>
        item.name.toLowerCase().includes(value)
      );

      setItems(search);
      // Need to correct our pagination to adapt to new search result
      setPage(1);
      setCount(Math.ceil(search.length / rowsPerPage));
    } else {
      // On search empty put everything back to initial stage
      setItems(rows);
      setPage(1);
      setCount(Math.ceil(rows.length / rowsPerPage));
    }
  };
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };
  const renderTableColumns = () => {
    let nColumn = null;
    let nActions = null;
    const nColumns = columns.map((column) => {
      nColumn = column;
      return (
        <TableCell
          key={column.id}
          align={column.align}
          style={{ minWidth: column.minWidth }}
        >
          {column.label}
        </TableCell>
      );
    });
    if (actions) {
      nActions = (
        <TableCell
          key={nColumn.id}
          align={nColumn.align}
          style={{ minWidth: nColumn.minWidth }}
        >
          Actions
        </TableCell>
      );
    }
    return (
      <TableRow>
        {nColumns}
        {nActions}
      </TableRow>
    );
  };
  const renderTableRows = () => {
    let nColumn = null;
    return items
      .slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage)
      .map((row) => {
        return (
          <StyledTableRow role="checkbox" tabIndex={-1} key={row.code + "Row"}>
            {columns.map((column) => {
              nColumn = column;
              const value = row[column.id];
              return (
                <TableCell
                  key={column.id + "Cell"}
                  align={column.align}
                  style={{ color: column.color(value) }}
                >
                  {column.type && column.type === "link" ? (
                    <Link
                      color="inherit"
                      onClick={(e) => handleLinkClick(e, row)}
                      style={{ cursor: "pointer" }}
                    >
                      {value}
                    </Link>
                  ) : (
                    value
                  )}
                </TableCell>
              );
            })}
            {actions ? (
              <TableCell key={nColumn.id + "Cell"} align={nColumn.align}>
                {actions.map((action, i) => {
                  return (
                    <IconButton
                      key={i + "Action"}
                      aria-label="upload picture"
                      component="span"
                      onClick={(e) =>
                        handleActionClick(e, { type: action, ...row })
                      }
                    >
                      {getActionIconType(action, i)}
                    </IconButton>
                  );
                })}
              </TableCell>
            ) : (
              ""
            )}
          </StyledTableRow>
        );
      });
  };

  const getActionIconType = (type, index) => {
    switch (type) {
      case "delete":
        return <Icon.Trash2 key={index} color="red" />;
      case "edit":
        return <Icon.Edit key={index} color="black" />;
      case "play":
        return <Icon.PlayCircle key={index} color="black" />;
      case "pause":
        return <Icon.PauseCircle key={index} color="black" />;
    }
  };
  return (
    <Grid conatiner>
      <Grid item>
        <Grid container justify="space-between" alignItems="flex-start">
          <Grid item>
            {search ? <Search handleSearchChange={handleSearchChange} /> : ""}
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Paper elevation={1}>
          <TableContainer className={classes.container}>
            <Table aria-label="table">
              <TableHead className={classes.table_head}>
                {renderTableColumns()}
              </TableHead>
              <TableBody>{renderTableRows()}</TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Grid>
      <Grid item>
        <Grid
          container
          justify="space-between"
          alignItems="flex-start"
          className={classes.paginationContainer}
        >
          <Grid item>
            {pagination ? (
              <Pagination
                color="secondary"
                shape="rounded"
                count={count}
                page={page}
                showFirstButton
                showLastButton
                onChange={handleChange}
              />
            ) : (
              ""
            )}
          </Grid>
          <Grid item>
            {pagerows ? (
              <FormControl
                className={classes.rowPageContainer}
                style={{ padding: 15 }}
              >
                <Select
                  labelId="customized-select-label"
                  id="customized-select"
                  value={rowsPerPage}
                  IconComponent={iconComponent}
                  onChange={handleChangeRowsPerPage}
                  input={<BootstrapInput />}
                >
                  <MenuItem value={5}>5</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
