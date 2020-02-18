import React, { Component } from 'react';
import './signin.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth-actions';
import { apiPath } from '../../env';

import PassToggler from '../../util-components/pass-view-toggle/pass-toggler';

class SigninPage extends Component {

    state = {
        email: null,
        password: null,
        error: false,
    }

    handleInputs = (e) => {
        let data = e.target;

        this.setState({
            [data.name]: data.value
        })
    }

    postLogin = (e) => {
        e.preventDefault();
        const { email, password } = this.state;
        
        axios.post(apiPath + "login", {email, password})
        .then(res => {
            if (res.status === 200) {
                this.props.login(res.data.user, res.data.token);
            }
        })
        .then(() => {
            this.props.history.push("/home");
        })
        .catch(err => {
            if (err) {
                this.setState({
                    error: true,
                })
            }
        });
    }

    render() {
        const { error } = this.state;

        return (
            <div className="signin">
                <h4>Please sign in</h4>
                <form className="form-group login">
                    <input className="form-control" 
                        name="email" 
                        type="email" 
                        placeholder="Enter Email" 
                        onChange={this.handleInputs}
                        onBlur={this.handleInputs} />
                    <input className="form-control" 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        id="loginPassInput"
                        onChange={this.handleInputs}
                        onBlur={this.handleInputs} />

                    <p className={!error ? "input-caption hidden" :"input-caption"}>Incorrect email or password.</p>
                    <button className="btn btn-primary" onClick={this.postLogin}>Login</button>
                    <Link to="/signup"><p>I don't have an account yet</p></Link>
                </form>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    login: login
}, dispatch);

export default connect(null, mapDispatchToProps)(SigninPage);