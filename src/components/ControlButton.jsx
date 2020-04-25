/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';
import { connectVpn, disconnectVpn } from '../actions';

class ControlButton extends React.Component {
  onButtonClick = (buttonText) => {
    if (!this.props.country.code) {
      alert('No Country Selected');
      return;
    }

    if (buttonText === 'Connect') {
      this.props.connectVpn(this.props.country.code);
    }

    if (buttonText === 'Disconnect') {
      this.props.disconnectVpn();
    }
  }

  render() {
    const buttonText = this.props.connection.status === 'Connected' ? 'Disconnect' : 'Connect';

    return <button type="button" onClick={() => { this.onButtonClick(buttonText) }}>{buttonText}</button>;
  }
};

const mapStateToProps = (state) => ({
  country: state.country,
  connection: state.connection,
 });

export default connect(mapStateToProps, { connectVpn, disconnectVpn })(ControlButton);
