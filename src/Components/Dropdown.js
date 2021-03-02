// import React, {useEffect,useState} from 'react';
// import {NativeSelect , FormControl} from '@material-ui/core'
// import styles from './CountrySelect.module.css'
// import {countries} from './Api'

// const Dropdown = ({handleCountryChange}) => {

// const [countriesData, setcountriesData] = useState([])

// useEffect(() => {
//     async function getData(){

//          setcountriesData(await countries())

//     }
//     getData()
    
// }, [])

//     return (
//       <FormControl className={styles.formControl}>
//           <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)} >
//               <option value=''>Global</option>
//               {
//                   countriesData.map((data,ind)=>(
//                   <option value={data} key={ind}>{data}</option>
//                   )
//                   )
//               }

//           </NativeSelect>
//       </FormControl>
//     );
//     }
  
//   export default Dropdown;
  



import React, {useEffect,useState} from 'react';
import {NativeSelect , FormControl,ListSubheader,MenuItem,InputLabel,Select,makeStyles} from '@material-ui/core'
// import styles from './CountrySelect.module.css'
import {countries} from './api'
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    // marginLeft:650,
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
      // <FormControl  >
      //     <NativeSelect defaultValue="" onChange={(e)=>handleCountryChange(e.target.value)} >
      //         <ListSubheader className="dropdown" value='' >Global</ListSubheader>
      //         {
      //             countriesData.map((data,ind)=>(
      //             <MenuItem value={data} key={ind}>{data}</MenuItem>
      //             )
      //             )
      //         }
      //     </NativeSelect>
      // </FormControl >
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
  