  import React, { Component } from 'react';
  import PeopleListContainer from './containers/PeopleListContainer';

  class App extends Component {
    render() {
      return (
        <>
          <h1 style={{ textAlign: 'center', marginTop: '10px', color: '#2c3e50' }}>
            FETCH RAM DOM API
          </h1>
          <PeopleListContainer />
        </>
      );
    }
  }



  export default App;
