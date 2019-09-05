import React from 'react';
import './NewsItems.scss';

//displays an array of news articles
const NewsItems = ({ newsItems, loadState, country, loadError }) => {
    return (<div className='news-items'>
        <h2>{country} News</h2>
        <br />

        {loadError ? 'content not available, please try later' : ''}

        {!loadState && !loadError ? 'loading' :
            newsItems.map(item =>
                <div className='news-items__item news'>
                    <a target='_blank' href={item.link}> <h3>{item.title}</h3></a>
                </div>
            )
        }
    </div >)
};

export default NewsItems;