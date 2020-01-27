import React from 'react';
import App from './App';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { createStore } from 'redux';

import rootReducer from './redux/reducers'

Enzyme.configure({adapter: new EnzymeAdapter()});

const storeFactory = (initialState) => {
  return createStore(rootReducer, initialState);
}

const setup = (initialState={}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store}/>).dive().dive();
  return wrapper;
}

test('App renders without crashing', () => {
  const wrapper = setup();
  const appDiv = wrapper.find({"className": "app-router-div"});
  expect(appDiv.length).toBe(1);
})
