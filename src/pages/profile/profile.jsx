import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './profile.css';

import Container from '../../components/container/container';

class UserPage extends Component {


    render() {
        const { user } = this.props;
        return (
            <Container>
                <div className="profile">
                    <h4>My Profile</h4>
                    <h5>{user}</h5>
                    <br/>
                    <form className="form-group">
                        <label name="name">Name</label>
                        <input for="name" id="nameInput" className="form-control"></input>
                        <label name="location">Location</label>
                        <input for="location" id="locationInput" className="form-control"></input>
                        <br/>
                        <button className="btn btn-light" type="submit">Update User Info</button>
                    </form>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserPage);