import React from 'react';
import Status from './Status';
import CountryList from './CountryList';
import ControlButton from './ControlButton';

const App = () => (
  <div className="ui container">
    <div className="ui relaxed divided items">
      <Status />
      <CountryList />
      <ControlButton />
    </div>
  </div>
);

export default App;
