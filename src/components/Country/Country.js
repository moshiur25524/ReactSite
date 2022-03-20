import React from 'react';
import './Country.css'

const Country = (props) => {
    const {name,flags,region,subregion,area,maps,population}=props.country
    return (
        <div className='country'>
            <h1>NAME: {name.common}</h1>
            <img src={flags.png} alt="" />
            <p>Region: {region}</p>
            <p>Sub Region: {subregion}</p>
            <p>Area: {area}</p>
            <p> <a href={maps.googleMaps}>GOOGLE MAP</a></p>
            <p>Population: {population}</p>
            
        </div>
    );
};

export default Country;