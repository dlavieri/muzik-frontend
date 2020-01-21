import React, { Component } from 'react';
import './signin.css';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth-actions';

class SignupPage extends Component {

    state = {
        email: null,
        password: null,
        passMatch: null,
    }

    handleInputs = (e) => {
        let data = e.target;

        this.setState({
            [data.name]: data.value
        })
    }

    checkPassMatch = (e) => {
        let confirmPass = e.target.value;
        if (this.state.password === confirmPass) {
            this.setState({
                passMatch: true
            });
        } else {
            this.setState({
                passMatch: false
            })
        }
    }

    postSignup = (e) => {
        e.preventDefault();
        const { email, password, passMatch } = this.state;
        if (!passMatch) {
            return null; 
        }

        axios.put(`https://desolate-shore-33045.herokuapp.com/new-user`, {email, password})
        .then(res => {
            if (res.status === 200) {
                axios.post(`https://desolate-shore-33045.herokuapp.com/login`, {email, password})
            }
        })
        .then(res => {
            if (res.status === 200) {
                this.props.login(res.data.user, res.data.token);
            }
        })
        .then(res => {
            this.props.history.push("/home")
        })
        .catch(err => console.log(err));
    }

    render() {

        return (
            <div className="signin">
                <h4>Please sign up a new account</h4>
                <form className="form-group login">
                    <input className="form-control" 
                        name="email" 
                        type="email" 
                        placeholder="Enter Email" 
                        onChange={this.handleInputs}></input>
                    <input className="form-control" 
                        name="password" 
                        type="password" 
                        placeholder="Password" 
                        onChange={this.handleInputs}></input>
                    <input className="form-control" 
                        name="confirmPass" 
                        type="password" 
                        placeholder="Confirm Password"
                        onBlur={this.checkPassMatch}></input>
                    <button className="btn btn-light" onClick={this.postSignup}>Signup</button>
                </form>

            </div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    login: login
}, dispatch);

export default connect(null, mapDispatchToProps)(SignupPage);