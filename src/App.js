import React, { useState } from 'react';
import './App.css';
import Map from './components/Map';
import continentsData from './countries.json';
import CountryList from './components/CountryList';
import NewsItems from './components/NewsItems';
import ApolloClient, { gql } from 'apollo-boost';
import MapContext from './context/mapContext';
import ListContext from './context/mapContext';

//get graphql endpoint
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

//global application
function App() {

  //get all the continents from the JSON data
  const [...continents] = continentsData.data.continents;

  //setup state hooks
  const [countryList, selectCountryList] = useState([]);
  const [countrySelection, selectCountry] = useState('');
  const [newsItems, updateNewsItems] = useState([]);
  const [loadState, updateLoadState] = useState(false);
  const [loadError, updateLoadError] = useState(false);

  const contextProvider = {
    list: countryList,
    countryList: selectCountryList,
    countrySelection,
    selectCountry,
    update: updateContinent,
    searchCountry: searchCountryNews,
  }

  //function to select the continent, used on the map component
  function updateContinent(continent) {
    updateLoadState(false)
    updateNewsItems([]);

    //returns the country list that was selected
    let countriesList = continents.filter(cont => cont.name.toLowerCase() === continent.toLowerCase().replace('_', ' '))[0];
    let { countries } = countriesList;

    //sets country list
    selectCountryList(countries);
    //reset for countrySelection state
    selectCountry('');
  }

  //function to update country news, makes a enquiry to the graphql server
  function searchCountryNews(country) {
    selectCountry(country);
    selectCountryList([]);

    const countryNews = country.replace(' ', '');

    const GET_NEWS = gql
      `{
      news(country:"${countryNews}") {
        title
        link
      }
  }`;

    client.query({
      query: GET_NEWS
    }).then(result => { updateNewsItems(result.data.news); console.log(result.data.news); }).then(() => { updateLoadState(true); updateLoadError(false) }).catch(err => updateLoadError(true))

    console.log(newsItems);
  }

  return (
    <MapContext.Provider value={contextProvider}>
      <div className="App">
        {/*always show map*/}
        <Map selectcontinent={updateContinent} />
        {/*if the countrylist state is not empty coiuntryList show the countrylist component*/}

        {countryList.length !== 0 ?
          <CountryList countrySelection={countryList} selectCountry={searchCountryNews} />
          : ''}

        {countryList.length === 0 && countrySelection.length === 0 ? <h1>Please select a Continent</h1> : ''}

        {/*if the countrySelection state is not empty show the news items*/}
        {/* {countrySelection.length !== 0 ? <NewsItems country={countrySelection} newsItems={newsItems} loadState={loadState} loadError={loadError} /> : ''} */}
      </div>
    </MapContext.Provider>
  );
}

export default App;
