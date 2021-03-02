import React, {useState, useEffect} from 'react';
import Chart from './Components/Chart';
import Card from './Components/Card';
import {fetchData} from './Components/api';
import Dropdown from './Components/Dropdown';
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
      <p className="cov">Covid19 Tracker App</p>
      <Card data={globalData}/>
      <Dropdown  handleCountryChange={handleCountryChange} />
      <Chart data={globalData} country={countryChange}/>
      <p className="cov">Covid19 Tracker App By Shehzad Haroon &nbsp;
      </p>
    </div>
  );
  }
export default App;
