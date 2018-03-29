import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { mount, shallow, configure } from 'enzyme';
import LoginContainer from '../src/container/login';
import { Login } from '../src/component/login';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';

configure({ adapter: new Adapter() });

import jsdom from 'jsdom'
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView

const initialState = { };
const mockStore = configureStore();
const store = mockStore(initialState);

const wrapper = mount(<Provider store={store}><LoginContainer /></Provider>);
const container = wrapper.find('LoginContainer');
const component = container.find('Login');

describe('<LoginContainer />', () => {
  it('renders Container component', () => {
    expect(wrapper.find('LoginContainer')).to.have.length(1);
  });
  it('renders Login component', () => {
    expect(container.find('Login')).to.have.length(1);
  });
  it('Container passing props to Login component', () => {
    expect(component.props()['formType']).to.equal('login');
    expect(component.props()['form']).to.deep.equal({});
    expect(component.props()['userData']).to.deep.equal();
  });
  it('Container captues form Data', () => {
    const setFormData = component.props()['setFormData'];
    setFormData("username","muthu1988");
    expect(component.props()['form']).to.deep.equal({username: 'muthu1988'});
  });
});