import React from 'react';
import NewsItems from './index';

import { shallow } from 'enzyme';

const newList = [{ title: "title 1", link: "link" }, { title: "title 2", link: "link 2" }];

describe('newsItems', () => {
    it("should render a list of news items", () => {
        const newsItems = shallow(<NewsItems newsItems={newList} loadState={true} country={'austria'} />);

        newsItems.find('.news-items__item').forEach((node, index) => {
            expect(node.text()).toBe(` title ${index + 1}`);
        });
    });
});

