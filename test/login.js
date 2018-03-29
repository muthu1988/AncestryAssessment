import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, configure } from 'enzyme';
import { Login } from '../src/component/login';

configure({ adapter: new Adapter() });

const wrapper = shallow(<Login formType="login" />);

describe('<Login />', () => {
  it('renders Row component', () => {
    expect(wrapper.find('Row')).to.have.length(1);
  });
  it('renders 3 Col components', () => {
    expect(wrapper.find('Col')).to.have.length(3)
  });
  it('renders Button component', () => {
    expect(wrapper.find('Button')).to.have.length(1);
  });
  it('renders Nav component', () => {
    expect(wrapper.find('Nav')).to.have.length(1);
    expect(wrapper.find('NavItem')).to.have.length(2);
  });
  it('renders only Login components', () => {
    expect(wrapper.find('#username')).to.have.length(1);
    expect(wrapper.find('#password')).to.have.length(1);
    expect(wrapper.find('#email')).to.have.length(0);
  });
  it('renders signup components as well', () => {
    expect(wrapper.find('#username')).to.have.length(1);
    expect(wrapper.find('#password')).to.have.length(1);
    expect(wrapper.find('#email')).to.have.length(0);
  });
});