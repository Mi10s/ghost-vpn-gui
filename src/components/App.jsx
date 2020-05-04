import React from 'react';
import Status from './Status';
import CountryList from './CountryList';
import ControlButton from './ControlButton';

const App = () => (
  <div
    style={
      {
        background: 'url("./img/background.jpg") no-repeat fixed center',
        height: '100vh',
      }
    }
  >
    <div className="ui container">
      <div className="ui relaxed divided items">
        <Status />
        <CountryList />
        <ControlButton />
      </div>
    </div>
  </div>
);

export default App;
