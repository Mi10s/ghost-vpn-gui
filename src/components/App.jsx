import React from 'react';
import Status from './Status';
import CountryList from './CountryList';
import ControlButton from './ControlButton';

const App = () => (
  <div className="ui container">
    <Status />
    <CountryList />
    <ControlButton />
  </div>
);

export default App;
