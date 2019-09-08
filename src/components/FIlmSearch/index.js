import React, { useState } from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import './filmSearch.scss';


const FilmSearch = ({ client }) => {

    const [inputValue, updateValue] = useState('');

    const [filmResult, updateFilmResult] = useState({});

    function searchFilm() {

        const GET_FILM = gql
            `{
        films(title:"${inputValue}") {
            Title
            Director
            Poster
        }
    }`;

        client.query({
            query: GET_FILM
        }).then(result => { updateFilmResult(result.data.films) });
    }

    return (
        <div>
            <div className='film-search'>

                <h1>Pick a film</h1>
                <input value={inputValue} onChange={e => updateValue(e.target.value)} />

                <button onClick={searchFilm}>Choose film</button>


                {
                    filmResult.Title && inputValue.length !== 0 ?

                        <div className='results'>
                            <h2>{filmResult.Title}</h2>

                            <img src={filmResult.Poster} />
                        </div>

                        : <h2>please select a film</h2>
                }
            </div>
        </div>
    );

};

export default FilmSearch;