import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Pagination from '@material-ui/lab/Pagination'
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Grid from '@material-ui/core/Grid';
import * as Icon from "react-feather";

import Search from './Search';

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}
const iconComponent = (props) => {
    return (
      <Icon.ChevronDown className={props.className} style={{color: 'white', paddingRight: 5, paddingLeft: 5}} />
    )};

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
  createData('India2', 'IN2', 1324171354, 3287263),
  createData('China2', 'CN2', 1403500365, 9596961),
  createData('Italy2', 'IT2', 60483973, 301340),
  createData('United States2', 'US2', 327167434, 9833520),
  createData('Canada2', 'CA2', 37602103, 9984670),
  createData('Australia2', 'AU2', 25475400, 7692024),
  createData('Germany2', 'DE2', 83019200, 357578),
  createData('Ireland2', 'IE2', 4857000, 70273),
  createData('Mexico2', 'MX2', 126577691, 1972550),
  createData('Japan2', 'JP2', 126317000, 377973),
  createData('France2', 'FR2', 67022000, 640679),
  createData('United Kingdom2', 'GB2', 67545757, 242495),
  createData('Russia2', 'RU2', 146793744, 17098246),
  createData('Nigeria2', 'NG2', 200962417, 923768),
  createData('Brazil2', 'BR2', 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  table_head: {
    //borderBottom: '2px solid gray'
  },
  paginationContainer: {
      marginTop: 20,
       height: 32
  },
  rowPageContainer: {
     height: '2px'
    }
});
const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
     height: '10px',
  },
  input: {
    borderRadius: 4,
    position: 'relative',
   
    backgroundColor: '#f50057',//theme.palette.background.paper,
    color: '#fff',
    border: '1px solid #ced4da',
    fontSize:  '0.875rem',
    padding: '5px 26px 5px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      //borderColor: '#80bdff',
     // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      backgroundColor: '#f50057',//theme.palette.background.paper,
    color: '#fff',
    },
    
  },
}))(InputBase);

export default function CustomTable({pagination, search, pagerows}) {
  const classes = useStyles();
  const [page, setPage] = React.useState(1);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [items, setItems ] = React.useState(rows);
  const [count, setCount] = React.useState(items.length/rowsPerPage);
  const [filter, setFilter] = React.useState('Name');

  const handleChange = (event, value) => {
    setPage(value);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(1);
    setRowsPerPage(+event.target.value); 
  }
  const handleSearchChange = (event) => {
      let value = event.target.value.toLowerCase();
     if(value){
       let search = rows.filter(item => item.name.toLowerCase().includes(value));
       
      setItems(search);
       // Need to correct our pagination to adapt to new search result
      setPage(1)
      setCount(Math.ceil(search.length/rowsPerPage))
     }else{
       // On search empty put everything back to initial stage
       setItems(rows);
        setPage(1)
       setCount(Math.ceil(rows.length/rowsPerPage));      
    }
  }
  const handleFilterChange = (event) => {
     console.log("Column: "+event.target.value);
     setFilter(event.target.value)
  }
  return (
    <Grid conatiner>
    <Grid item>
    <Grid container justify="space-between" alignItems="flex-start">
    <Grid item>
      {search ?
      <Search handleSearchChange={handleSearchChange} /> : ''
     }
      </Grid>
      
      </Grid>
    </Grid>

    <Grid item>
   <Paper elevation={1}>
      <TableContainer className={classes.container}>
        <Table aria-label="table">
          <TableHead className={classes.table_head}>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {items.slice((page - 1) * rowsPerPage, (page - 1) * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <StyledTableRow role="checkbox" tabIndex={-1} key={row.code + "Row"}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id + "Cell"} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      
    </Paper>
    </Grid>
    <Grid item>
   <Grid container justify="space-between" alignItems="flex-start" className={classes.paginationContainer}>
   <Grid item>
     { pagination ?
    <Pagination 
       color="secondary"
       shape="rounded"
       count={count} 
      page={page}
       showFirstButton 
       showLastButton 
       onChange={handleChange}
    />: ''
     }
    </Grid>
    <Grid item >
      { pagerows ?
     <FormControl className={classes.rowPageContainer} style={{padding: 15}}> 
        <Select
          labelId="customized-select-label"
          id="customized-select"
          value={rowsPerPage}
          IconComponent={iconComponent}
          onChange={handleChangeRowsPerPage}
          input={<BootstrapInput />}>
           <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={20}>20</MenuItem>
          <MenuItem value={30}>30</MenuItem>
        </Select>
      </FormControl> : ''
}
      </Grid>
      </Grid>
    
    
    </Grid>
    </Grid>
  );
}

