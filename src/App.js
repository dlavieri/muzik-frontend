import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Col, Row } from 'react-bootstrap';

import HomePage from './pages/home/home';
import PlaylistPage from './pages/playlist/playlist';
import SigninPage from './pages/signin/signin';
import SignupPage from './pages/signin/signup';
import UploadPage from './pages/upload/upload';

import NavBar from './components/navbar/navbar';
import DropdownMenu from './components/navbar/dropdown-nav';
import Footer from './components/footer/footer';
import Header from './components/header/header';


const PrivateRoute = ({ page: Page, isLoggedIn, ...rest}) => (
    <Route {...rest} render={props => (isLoggedIn ? <Page {...props}/> : <Redirect to="/" />)} />
);


function App(props) {
  return (
    <Router>
      <div className="app-router-div">
        <Row className="app-main-row">
          <Col xs={2} className={props.isLoggedIn ? "app-nav-col" : "app-nav-col __notLoggedIn"}>
            <NavBar isLoggedIn={props.isLoggedIn} user={props.user}/>
          </Col>
          <Col fluid={"true"} className="app-main-col">
            <Header user={props.user}/>
            <DropdownMenu user={props.user} menuOpen={props.menuOpen}/>
            <Route exact path="/" component={SigninPage} />
            <Route path="/signup" component={SignupPage} />
            <PrivateRoute path="/home" page={HomePage} isLoggedIn={props.isLoggedIn} />
            <PrivateRoute path="/moods/:moodid" page={PlaylistPage} isLoggedIn={props.isLoggedIn} />
            <PrivateRoute path="/playlists/:playlistid" page={PlaylistPage} isLoggedIn={props.isLoggedIn} />
            <Route path="/admin/add-music" component={UploadPage}/>
          </Col>
        </Row>

        <Row className="app-footer-row">
          <Footer/>
        </Row>
      </div>
    </Router>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    isLoggedIn: state.isLoggedIn,
    menuOpen: state.menuOpen
  }
}



export default connect(mapStateToProps)(App);
