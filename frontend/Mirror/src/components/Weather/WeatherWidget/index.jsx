
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import weatherToKorean from '../weatherToKorean'
import Weather from '../WeatherComponent'
import Wrapper from './styles'
import {Typography,CardActions} from '@material-ui/core'

function App() {
  let [address, setAddress] = useState('')
  let [nowWeather, setNowWeather] = useState([])
  let [weathers, setWeathers] = useState([])
  let [apiDong, setApiDong] = useState('')

  const key = `${process.env.REACT_APP_GEOCODING_KEY}`
  const weatherKey=`${process.env.REACT_APP_OPENWEATHER_KEY}`
  useEffect(()=>{
    getLocation()
  },[])
  async function getLocation(){
    const response = await axios.get('http://localhost:3065/weather');
    const weather = response.data.weather
    setApiDong(response.data.dong)
    const daily = weather.daily
    const hourly = weather.hourly
    setNowWeather({
      date : new Date(daily[0].dt*1000),
      minTemp: daily[0].temp.min,
      maxTemp: daily[0].temp.max,
      nowTemp: hourly[0].temp,
      weather: daily[0].weather[0]
    })
    let tempWeathers =[]
    for(let i=1;i<6;i++){
      tempWeathers.push({
        date : new Date(daily[i].dt*1000),
        minTemp: daily[i].temp.min,
        maxTemp: daily[i].temp.max,
        weather: daily[i].weather[0]
      })
    }
    setWeathers(tempWeathers)
  }

  return (
    <Wrapper>
      {
        !nowWeather.date?
        null:
        <>
        <CardActions className='now-weather-div'>
          <img src={'http://openweathermap.org/img/wn/'+nowWeather.weather.icon+'@2x.png'} alt='' id='now-weather-icon'></img>
          <Typography  id='now-temp' className='text' style={{fontSize:'40px'}}>{Math.ceil(nowWeather.nowTemp)}°</Typography>
          <Typography variant='h4' className='text' style={{fontSize:'30px',width: "100px", textAlign: "center"}}>{weatherToKorean(nowWeather.weather.id)}</Typography>
          <div id='min-max-temp' className='text'>
            <Typography variant='h6' style={{color:'blue'}}>{Math.ceil(nowWeather.minTemp)}°</Typography>
            <Typography variant='h6' >/</Typography>
            <Typography variant='h6' style={{color:'red'}}>{Math.ceil(nowWeather.maxTemp)}°</Typography>
          </div>
          <Typography id='dong' className='text'>{apiDong}</Typography>
        </CardActions>
        <div id='next-weather'>
          {
            weathers.map((item, idx) =>(<Weather item={item} key={idx} idx={idx}></Weather>))
          }
        </div>
        </>
      }
    </Wrapper>
  );
}

export default App;
