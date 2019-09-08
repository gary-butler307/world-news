import React from 'react';

const defaultContext = {
    list: [],
    countryList: () => { },
    countrySelection: '',
    selectCountry: () => { },
    update: () => { },
    searchCountry: () => { },
};

const MapContext = React.createContext(defaultContext);

export default MapContext;