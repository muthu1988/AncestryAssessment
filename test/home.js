import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import { Home } from '../src/component/home';

configure({ adapter: new Adapter() });

const app = {
  userData : { firstname: '', lastname: '' },
  users: [
    { firstname: '', lastname: '' },
    { firstname: '', lastname: '' },
    { firstname: '', lastname: '' }
  ]
};

const wrapper = shallow(<Home app={app} />);

describe('<Home />', () => {
  it('renders Row component', () => {
    expect(wrapper.find('Row')).to.have.length(1);
  });
  it('renders 3 Col components', () => {
    expect(wrapper.find('Col')).to.have.length(1)
  });
  it('renders Welcome component', () => {
    expect(wrapper.find('Well')).to.have.length(1);
  });
  it('renders Table component', () => {
    expect(wrapper.find('Table')).to.have.length(1);
  });
  it('renders Rows component', () => {
    expect(wrapper.find('tr')).to.have.length(4);
  });
});