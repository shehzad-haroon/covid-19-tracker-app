// import logo from './logo.svg';
// import './App.css';
// import Home from './Components/Home'
// function App() {
//   return (
//     <div className="App">
//      <h1>Covid 19 Tracker App</h1>
//      <Home/>
//     </div>
//   );
// }
// export default App;



import React, {useState, useEffect} from 'react';
// import styles from './App.module.css';
import Chart from './Components/Chart';
import Card from './Components/Card';
import {fetchData} from './Components/api';
import Dropdown from './Components/Dropdown';
// import covid_updated2 from './Images/covid_updated2.png'
function App() {
  const [globalData, setglobalData] = useState({})
  const [countryChange, setcountryChange] = useState('')
  useEffect(() => {
    async function getData() {
        const fetchedData = await fetchData()
        setglobalData(fetchedData)
        console.log(fetchedData)
    } 
    getData()
}, [])
async function handleCountryChange(country){

  const fetchedData = await fetchData(country)
  setglobalData(fetchedData)
  setcountryChange(country)
  
    
  }

 

  return (
    <div className="">
      {/* <img className={styles.image} src={covid_updated2} alt={'Covid-19'} /> */}
      <p className="cov">Covid19 Tracker App</p>
      <Card data={globalData}/>
      <Dropdown  handleCountryChange={handleCountryChange} />
      <Chart data={globalData} country={countryChange}/>
      <p className="cov">Covid19 Tracker App By Shehzad Haroon &nbsp;
       <a href="https://github.com/shehzad-haroon">Github Link</a>
      </p>
    </div>
  );
  }

export default App;
