import React from 'react';
import { shallow } from 'enzyme';
import Note from './Note';

it('renders without crashing', () => {
  shallow(<Note />);
});
