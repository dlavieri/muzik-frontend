import React, { Component } from 'react';
import './signin.css';
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth-actions';

class SignupPage extends Component {

    state = {
        email: '',
        validEmail: true,
        password: '',
        passMatch: false,
        pass5: false,
        passNumSym: false,
        passUpper: false,
        passLower: false,
        emailValid: true,
    }

    handleInputs = (e) => {
        let data = e.target;

        this.setState({
            [data.name]: data.value
        }, () => {
            if (data.name === 'password') {
                this.validatePass();
            }
        })
    }

    validatePass = () => {
        let { password } = this.state;

        let regexNumSym = /[0-9!@#$%^&*(),.?"':{}|<>]/;
        let regexUpper = /[A-Z]/;
        let regexLower = /[a-z]/;

        if (password.trim().length > 4) {
            this.setState({
                pass5: true
            })
        } else {
            this.setState({
                pass5: false
            })
        }

        if (regexNumSym.test(password)) {
            this.setState({
                passNumSym: true
            })
        } else {
            this.setState({
                passNumSym: false
            })
        }

        if (regexUpper.test(password)) {
            this.setState({
                passUpper: true
            })
        } else {
            this.setState({
                passUpper: false
            })
        }

        if (regexLower.test(password)) {
            this.setState({
                passLower: true
            })
        } else {
            this.setState({
                passLower: false
            })
        }
    }

    validateEmail = () => {
        let { email } = this.state;
        
        let regexEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
        if (!regexEmail.test(email)) {
            this.setState({
                validEmail: false
            });
        } else {
            this.setState({
                validEmail: true
            })
        }
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

        axios.post(`https://desolate-shore-33045.herokuapp.com/new-user`, {email, password})
        .then(res => {
            if (res.status === 200) {
                return axios.post(`https://desolate-shore-33045.herokuapp.com/login`, {email, password})
            }
        }) 
        .then(res => {
            if (res.status === 200) {
                this.props.login(res.data.user, res.data.token);
            }
        })
        .then(() => {
            this.props.history.push("/home")
        })
        .catch(err => console.log(err));
    }

    render() {
        const { pass5, passNumSym, passUpper, passLower, passMatch, validEmail } = this.state;
        const valid = pass5 && passNumSym && passUpper && passLower && passMatch && validEmail;

        return (
            <div className="signin">
                <h4>Please sign up a new account</h4>
                <form className="form-group login">
                    <input className="form-control" 
                        name="email" 
                        type="email" 
                        placeholder="Enter Email" 
                        onChange={this.handleInputs}
                        onBlur={this.validateEmail} />
                    <p className={validEmail ? "input-caption hidden" : "input-caption"}>Please enter a valid email.</p>
                    <input className="form-control" 
                        name="password" 
                        type="password" 
                        id="signupPass"
                        placeholder="Password" 
                        onChange={this.handleInputs} />
                    <p className={pass5 ? "input-caption hidden" : "input-caption"}>At least than 5 characters</p>
                    <p className={passNumSym ? "input-caption hidden" : "input-caption"}>Includes at least one number or symbol</p>
                    <p className={passUpper ? "input-caption hidden" : "input-caption"}>Includes at least one uppercase letter</p>
                    <p className={passLower ? "input-caption hidden" : "input-caption"}>Includes at least one lowercase letter</p>
                    <input className="form-control" 
                        name="confirmPass" 
                        type="password" 
                        id="signupPassMatch"
                        placeholder="Confirm Password"
                        onBlur={this.checkPassMatch} />
                    <p className={!passMatch ? "input-caption" : "input-caption hidden"}>Passwords must match</p>
                    {valid ? 
                        <button className="btn btn-primary" onClick={this.postSignup}>Signup</button> :
                        <button className="btn btn-light" onClick={null} disabled>Signup</button>
                    }
                </form>

            </div>
        )
    }
}


const mapDispatchToProps = dispatch => bindActionCreators({
    login: login
}, dispatch);

export default connect(null, mapDispatchToProps)(SignupPage);