import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import fetchMoods from '../../redux/actions/fetchMoods';

import Container from '../../components/container/container';
import Mood from '../../components/mood/mood';
import LoadingAnimation from '../../util-components/load-animation/loading';
import './home.css';

class HomePage extends Component {

    componentDidMount = () => {
        const { fetchMoods, token } = this.props;
        fetchMoods(token)
    }

    render() {
        const { moods, moodsFetching } = this.props;
        return (
            <Container>
                <div className="homepage">
                    <h3>Muzik for any Mood</h3>
                    <div className="moods-wrapper">
                        {moodsFetching ? 
                            <LoadingAnimation /> :
                        moods.map(mood => {
                            return <Mood 
                            key={mood._id}
                            moodId={mood._id}
                            name={mood.name}
                            img={mood.img}/>
                        })}
                        <br/>
                    </div>
                </div>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    return {
        moodsFetching: state.moodsFetching,
        moods: state.moods,
        error: state.error,
        token: state.token,
    }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchMoods: fetchMoods
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(HomePage); 