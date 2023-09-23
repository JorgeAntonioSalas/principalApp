import { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css'

const Weather = () => {
    const [time, setTime] = useState({});
    const [isTemp, setIsTemp] = useState(true);
    const changeTempType = ()=> {
        setIsTemp(!isTemp);
    }
    useEffect(()=> {
        function success(pos) {
            var crd = pos.coords;
            console.log('Your current position is:');
            console.log('Latitude : ' + crd.latitude);
            console.log('Longitude: ' + crd.longitude);
            console.log('More or less ' + crd.accuracy + ' meters.');
            //AXIOS GET
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${crd.latitude}&lon=${crd.longitude}&appid=208bda7380d978017ba7599fd6ae0b38`)
            .then(res=>setTime(res.data));
        }
        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        }
          navigator.geolocation.getCurrentPosition(success, error);
    },[])
    // console.log(time);

    return (
        <div id='Main'>
            <h1>Weather App</h1>
            <p><i className="fa-solid fa-location-dot"></i> {time.name}, {time.sys?.country}</p>
            <div className='stats'>
                <div className='leftStats'>
                    <div className='cloud'>
                        <img src={`https://openweathermap.org/img/wn/${time?.weather?.[0].icon}@2x.png`}></img>
                    </div>
                    <div className='temp'> 
                    <b>{isTemp? (time.main?.temp-273.15).toFixed(2)+' ºC':((time.main?.temp-273.15)*(9/5)+32).toFixed(2)+' ºF'}</b>   
                    </div>
                </div>
                <div className='rightStats'>
                    <div className='subtitle'>
                        <p><b>{time.weather?.[0].description}</b></p>
                    </div>
                    <div className='description'>
                        <p><i className="fa-solid fa-wind"></i> Wind Speed <b>{time.wind?.speed} m/s</b></p>
                        <p><i className="fa-solid fa-cloud"></i> Clouds: <b>{time.clouds?.all}%</b></p>
                        <p><i className="fa-solid fa-temperature-three-quarters"></i> Pressure: <b>{time.main?.pressure}</b></p>
                    </div>
                </div>
            </div>
            <div className='buttonChange'>
                <button onClick={changeTempType} > {isTemp? 'change to ºF': 'change to ºC' } </button>
            </div>
        </div>
    );
};
export default Weather;