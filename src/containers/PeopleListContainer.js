import React, { Component } from 'react';
import PeopleList from './../components/PeopleList';
import { connect } from 'react-redux';
import { fetchPeoples } from './../redux/actions/peopleAction';
import *  as actions from './../redux/actions/peopleAction';

class PeopleListContainer extends Component {

    componentDidMount() {
        this.props.onfetchPeoples();
    }

    render() {
        const { peoples, errorMessage } = this.props.peopleRandom;
        return (
            <PeopleList
                peoples={peoples}
                errorMessage={errorMessage}
            />
        );
    }
}

const mapStateToProps = state => ({
    peopleRandom: state.peopleReducer
});

const mapDispatchToProps = dispatch => ({
    onfetchPeoples: () => dispatch(actions.fetchPeoples())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PeopleListContainer);
