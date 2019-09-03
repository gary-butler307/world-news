import React from 'react';
import NewsItems from './index';

import { shallow, render } from 'enzyme';

const newList = [{ title: "title 1", link: "link" }, { title: "title 2", link: "link 2" }];

describe('newsItems', () => {
    it("should render a list of news items", () => {
        const newsItems = shallow(<NewsItems newsItems={newList} loadState={true} country={'austria'} />);
        expect(newsItems.contains(<a target='_blank' href="link"> <h3>title 1</h3></a>)).toEqual(true);
    });

    it("should render a list of news items", () => {
        const newsItems = render(<NewsItems newsItems={newList} loadState={true} country={'austria'} />);
        expect(newsItems.find('.news-items__item').text()).toEqual(' title 1 title 2');
    });

    it("should render a list of news items", () => {
        const newsItems = shallow(<NewsItems newsItems={newList} loadState={true} country={'austria'} />);

        newsItems.find('.news-items__item').forEach((node, index) => {
            expect(node.text()).toBe(` title ${index + 1}`);
        });
    });

});

