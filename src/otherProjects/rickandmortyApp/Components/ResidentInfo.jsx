import axios from 'axios';
import { useEffect, useState } from 'react';
import "../App.css";
// eslint-disable-next-line react/prop-types
const ResidentInfo = ({residents}) => {

    const [char, setChar] = useState({})

    useEffect(()=>{
        axios.get(residents)
        .then(res => setChar(res.data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    
    


    return (  
        <div>
            <div className='charContent'>
                <div className='imgContent'>
                    <img className='charImg' src={char.image} alt=""/>
                </div>
                <div className='descripContent'>
                    <h3 className='descrip'><b>{char.name}</b></h3>
                    <p className='descrip'>{char.status} - {char.species}</p>
                    <p className='descrip2'>Origin</p>
                    <p className='descrip'>{char.origin?.name}</p>
                    <p className='descrip2'>episodes where appear</p>
                    <p className='descrip'>{char.episode?.length}</p>
                    <br></br>
                </div>
            </div>        
        </div>
    );
};

export default ResidentInfo;