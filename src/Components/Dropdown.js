import React, {useEffect,useState} from 'react';
import {NativeSelect , FormControl,ListSubheader,MenuItem,InputLabel,Select,makeStyles} from '@material-ui/core'
import {countries} from './api'
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
const Dropdown = ({handleCountryChange}) => {
  const classes = useStyles();
const [countriesData, setcountriesData] = useState([])
useEffect(() => {
    async function getData(){

         setcountriesData(await countries())

    }
    getData()
}, [])
    return (
      <FormControl className={classes.formControl} id="formControl">
      <InputLabel htmlFor="grouped-select">Global</InputLabel>
      <Select defaultValue="" id="grouped-select" onChange={(e)=>handleCountryChange(e.target.value)}>
        <MenuItem value="">
          <em>Global</em>
        </MenuItem>
        <ListSubheader>All countries</ListSubheader>
      {countriesData.map((data,ind)=>(
                   <MenuItem value={data} key={ind}>{data}</MenuItem>
      ))}
      </Select>
    </FormControl>
    );
    }
  export default Dropdown;
  