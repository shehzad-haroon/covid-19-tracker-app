import React,{useEffect,useState} from 'react'
import {fetchData} from './api'
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Countup from 'react-countup';
import CircularProgress from '@material-ui/core/CircularProgress';
export default function Card({ data: { confirmed, recovered, deaths, lastUpdate } }) {


    if (!confirmed)
        return (
            <div >
              Loading
            </div>
        )

    return (
        <div >
            <Grid container spacing={2} justify='center' className="container">
                <Grid item xs={12} md={3} sm={4} id="inner-div" >
                    <CardContent className="card" >
                        <Typography color="textSecondary" gutterBottom>INFECTED</Typography>
                        <Typography variant="h5" component="h2">
                            <Countup start={0} end={confirmed.value} duration={2.0} separator=','  />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" component="p">Infected People from Covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} sm={4} id="inner-div" >
                    <CardContent className="card">
                        <Typography className="newdiv" color="textSecondary" gutterBottom>RECOVERED</Typography>
                        <Typography variant="h5" component="h2">
                            <Countup className="newdiv" start={0} end={recovered.value} duration={1} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" component="p">Recovered People from Covid19</Typography>
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} sm={4} id="inner-div" >
                    <CardContent className="card">
                        <Typography color="textSecondary" gutterBottom>DEATHS</Typography>
                        <Typography variant="h5" component="h2">
                            <Countup start={0} end={deaths.value} duration={0} separator=',' />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" component="p">Deaths Caused by Covid19</Typography>
                    </CardContent>
                </Grid >
            </Grid >
        </div>);
}






