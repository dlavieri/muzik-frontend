import React from 'react';
import App, { PrivateRoute } from './App';
import Enzyme, { shallow, mount } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { MemoryRouter, Route } from 'react-router-dom';

import rootReducer from './redux/reducers';
import { initialState } from './redux/reducers';

import HomePage from './pages/home/home';
import PlaylistPage from './pages/playlist/playlist';
import SigninPage from './pages/signin/signin';
import SignupPage from './pages/signin/signup';
import UploadPage from './pages/upload/upload';
import fetchMoods from './redux/actions/fetchMoods';

import { Footer } from './components/footer/footer';


Enzyme.configure({adapter: new EnzymeAdapter()});

export const storeFactory = (state) => {
  const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
  return createStoreWithMiddleware(rootReducer, state);
}

const connectedSetup = (Page, state={initialState}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<Page store={store}/>).dive().dive();
  return wrapper;
}

test('App renders without crashing', () => {
  const wrapper = connectedSetup(App);
  const appDiv = wrapper.find({"className": "app-router-div"});
  expect(appDiv.length).toBe(1);
});

describe('home page', () => {
  
  test('renders without crashing', () => {
    const wrapper = connectedSetup(HomePage, initialState);
    const homeDiv = wrapper.find({"className": "homepage"});
    expect(homeDiv.length).toBe(1);
    });

})

describe('playlist page', () => {

})

describe('signin page', () => {
  const setup = (state={initialState}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<SigninPage store={store}/>).dive();
    return wrapper;
  }

  test('renders without crashing', () => {
    const wrapper = setup(initialState);
    const signinDiv = wrapper.find({"className": "signin"});
    expect(signinDiv.length).toBe(1);
    })

})

describe('signup page', () => {
  const setup = (state={initialState}) => {
    const store = storeFactory(state);
    const wrapper = shallow(<SignupPage store={store}/>).dive();
    return wrapper;
  }

  test('renders without crashing', () => {
    const wrapper = setup();
    const signupDiv = wrapper.find({"className": "signin"});
    expect(signupDiv.length).toBe(1);
  })

  describe('errors from invalid credential inputs', () => {


  })
})

describe('upload page', () => {
  const setup = () => {
    const wrapper = shallow(<UploadPage />);
    return wrapper;
  }

  test('renders without crashing', () => {
    const wrapper = setup();
    const uploadComponent = wrapper.find({"className": "upload-page"});
    expect(uploadComponent.length).toBe(1);
  })

})

describe('footer and audio component', () => {
  const defaultProps = {
    isPlaying: false,
    songDetails: null,
    pausedTime: 0,
    playBtn: true,
    pauseBtn: false,
    resumeBtn: false
  };

  const setup = (props={defaultProps}) => {
    const wrapper = mount(<Footer {...props}/>);
    return wrapper;
  }

  test('footer renders without crashing', () => {
    const wrapper = setup();
    const footerDiv = wrapper.find({"className": "app-footer"});
    expect(footerDiv.length).toBe(1);
  })
})
