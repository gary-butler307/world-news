import React, { useContext } from 'react';
import './CountryList.scss';
import MapContext from './../../context/mapContext';

//Display a list of countries
const CountryList = () => {

    const { list, searchCountry } = useContext(MapContext);

    return (
        <div className='country-list'>
            <h3>PLease select a country</h3>
            {list.map(country =>
                <div onClick={() => searchCountry(country.name)}> {country.name}</div>
            )}
        </div >)
};

export default CountryList;