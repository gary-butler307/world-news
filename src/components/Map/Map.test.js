import React from 'react';
import Map from './index';

import { shallow, render, mount } from 'enzyme';

describe('newsItems', () => {

    it("should render a list of news items", () => {

        const selectcontinent = jest.fn();

        const newsItems = mount(<Map selectcontinent={selectcontinent} />);

        const continents = newsItems.find('g');

        continents.forEach((continent, key) => {
            continent.simulate('click');
            expect(selectcontinent).toHaveBeenCalledTimes(key + 1);
        });
    });
});

