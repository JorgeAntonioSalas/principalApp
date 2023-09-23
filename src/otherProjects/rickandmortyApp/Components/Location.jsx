import { useEffect, useState } from 'react';
import axios from 'axios';
import ResidentInfo from './ResidentInfo';

const Location = () => {

const [location, setLocation] = useState({});
const [id, setId] =useState('');
const [locationsList, setlocationsList] = useState([]);
const [locationsList2, setlocationsList2] = useState([]);
const [locationsList3, setlocationsList3] = useState([]);
const [locationsList4, setlocationsList4] = useState([]);
const [locationsList5, setlocationsList5] = useState([]);
const [locationsList6, setlocationsList6] = useState([]);
const [locationsList7, setlocationsList7] = useState([]);


useEffect(()=>{
    // para carga la locacion del inicio
    const random = Math.floor(Math.random()*126)+1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    .then (res => setLocation(res.data));

    //grupo1
    axios.get(`https://rickandmortyapi.com/api/location`)
    .then (res=> setlocationsList(res.data.results));
    //grupo2
    axios.get(`https://rickandmortyapi.com/api/location?page=2`)
    .then (res=> setlocationsList2(res.data.results));
    //grupo3
    axios.get(`https://rickandmortyapi.com/api/location?page=3`)
    .then (res=> setlocationsList3(res.data.results));
    //grupo4
    axios.get(`https://rickandmortyapi.com/api/location?page=4`)
    .then (res=> setlocationsList4(res.data.results));
    //grupo5
    axios.get(`https://rickandmortyapi.com/api/location?page=5`)
    .then (res=> setlocationsList5(res.data.results));
    //grupo6
    axios.get(`https://rickandmortyapi.com/api/location?page=6`)
    .then (res=> setlocationsList6(res.data.results));
    //grupo7
    axios.get(`https://rickandmortyapi.com/api/location?page=7`)
    .then (res=> setlocationsList7(res.data.results));

},[])

const searchLocation=()=>{
    console.log(id);
    if(id<=126){
    axios.get(`https://rickandmortyapi.com/api/location/${id}`)
    .then (res => setLocation(res.data));
    }else{
        alert('we only have 126 Locations')
    }
}

    // buscar localizaciones con el select
    const selectLocation=(locationURL)=>{
        axios.get(locationURL)
        .then(res => setLocation(res.data));
    }

    //cortar un arreglo para paginación

    return (
        <div>    
            <div>
                <h1 className='Title'>Rick and Morty Wiki</h1>
                <input className='input' placeholder='Enter a location Id' 
                    type="text" 
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
                <button className='button' onClick={searchLocation}>Search</button>   
            </div> 
            <div>
                <select className='selectBox' onChange={e => selectLocation(e.target.value)}>
                    <option value=''>Select a Location</option>    
                    {
                        locationsList.map(locationPosition => (
                            <option value={locationPosition.url} key={locationPosition.id}>{locationPosition.name}</option>
                        ))
                    }
                    {
                        locationsList2.map(locationPosition => (
                            <option value={locationPosition.url} key={locationPosition.id}>{locationPosition.name}</option>
                        ))
                    }
                    {
                        locationsList3.map(locationPosition => (
                            <option value={locationPosition.url} key={locationPosition.id}>{locationPosition.name}</option>
                        ))
                    }
                    {
                        locationsList4.map(locationPosition => (
                            <option value={locationPosition.url} key={locationPosition.id}>{locationPosition.name}</option>
                        ))
                    }
                    {
                        locationsList5.map(locationPosition => (
                            <option value={locationPosition.url} key={locationPosition.id}>{locationPosition.name}</option>
                        ))
                    }
                    {
                        locationsList6.map(locationPosition => (
                            <option value={locationPosition.url} key={locationPosition.id}>{locationPosition.name}</option>
                        ))
                    }
                    {
                        locationsList7.map(locationPosition => (
                            <option value={locationPosition.url} key={locationPosition.id}>{locationPosition.name}</option>
                        ))
                    }
                </select>
            </div>
            <h2 className='locationName'><b>{location.name}</b></h2>
            <div className='LocalSubsContent'> 
                <div><b>Type: </b>{location.type}</div>
                <div><b>Dimension: </b>{location.dimension}</div>
                <div><b>Population: </b>{location.residents?.length}</div>
            </div>  
            <div className='groupBox'>                
                <h2 className='subTitle'>Residents</h2>
                <ul>
                <div className='mainBox'> 
                    {location.residents?.map(residents => (
                    <ResidentInfo residents={residents} key={residents}/>
                ))}
                </div> 
                </ul>
            </div>        
        </div>
    );
};

export default Location;