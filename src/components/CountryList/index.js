import React from 'react';
import './CountryList.scss';

//Display a list of countries
const CountryList = ({ countrySelection, selectCountry }) => {
    return (<div className='country-list'>
        <h3>PLease select a country</h3>
        {countrySelection.map(country =>
            <div onClick={() => selectCountry(country.name)}> {country.name}</div>
        )}
    </div >)
};


export default CountryList;