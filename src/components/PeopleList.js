import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PeopleList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { peoples = [], errorMessage = '' } = this.props;
        return (
            <div className="container" style={{ marginTop: '2em', marginBottom: '2em' }}>
                <div className="card" style={{ width: '50%', margin: '0 auto' }}>
                    <ul className="list-group list-group-flush">
                        {
                            (!errorMessage)
                                ? this.showListPeople(peoples)
                                : errorMessage
                        }
                    </ul>
                </div>
            </div>
        );
    }

    showListPeople = (results) => {
        return results.map((people, index) => {
            return (
                <li key={index}
                    className="list-group-item"
                    style={{ margin: '0', padding: '10px' }}>
                    <span style={{ width: '75%', height: 'auto', float: 'left' }}>
                        <h4 style={{ color: '#34495e' }}>
                            {`${people.name.first}${people.name.last}`}
                        </h4>
                        <p style={{ color: '#27ae60' }}>{people.email}</p>
                        <p style={{ color: '#27ae60' }}>{people.phone}</p>
                    </span>
                    <img style={{ width: '130px', height: '120px', float: 'right', border: '1px solid #95a5a6' }} src={
                        people.picture.large
                    } />
                </li>
            );
        });
    }

}

PeopleList.propTypes = {
    errorMessage: PropTypes.string,
    peoples: PropTypes.array.isRequired
}

export default PeopleList;
