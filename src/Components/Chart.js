import React, { useState, useEffect } from 'react'
import { dailyFetchData } from './api'
import {Line, Bar} from 'react-chartjs-2'
// import styles from './Charts.module.css'


const Chart = ({data:{confirmed,recovered,deaths},country}) => {

    const [dailyData, setdailyData] = useState([])

    useEffect(() => {
        async function getDailyData() {
            setdailyData(await dailyFetchData())
            
        }

        getDailyData()
         

    }, [])


    const lineChart = (
        dailyData.length 
        ? <Line 
        data={{
            labels: dailyData.map(({date}) => date

            ),
            datasets: [{
                data: dailyData.map(
                    (data)=> data.confirmed
                ),

                label: 'Confirmed',
                borderColor: 'teal',
                backgroundColor: 'skyblue',
                fill: true

            },{
                data: dailyData.map((data)=> data.deaths),
                label: 'Deaths',
                borderColor: 'maroon',
                backgroundColor: 'maroon',
                fill: true
                
            }]
        }
        }
        /> : null
    )
const barChar = (confirmed 
    ? <Bar
    data={{
        labels: ['Infected','Recovered','Deaths'],
        datasets:[{
            label:'People',
            backgroundColor:['teal','rgb(43, 171, 43)','maroon'],
            data:[confirmed.value, recovered.value, deaths.value]
        }]
    }}
    options={{
        legend: {display: false},
        title: {display: true, text:` ${country}`},
        
    }}
    /> : null )
    return (
        <div className="new-container">
           
        {country ? barChar : lineChart}
        </div>
    )
}
export default Chart