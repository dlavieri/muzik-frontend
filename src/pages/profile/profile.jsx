import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class UserProfile extends Component {

    render() {
        return (
            <div/>
        )
    }
}

mapStateToProps = state => {
    return {
        user: state.user,
    }
};

mapDispatchToProps = dispatch => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);