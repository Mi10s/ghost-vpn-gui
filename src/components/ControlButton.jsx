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

  buttonConfig() {
    const { status } = this.props;
    const buttonText = status === 'Connected' ? 'Disconnect' : 'Connect';
    const buttonEnabled = process.env.USER_PASSWD ? '' : 'disabled';

    return { buttonText, buttonEnabled };
  }

  render() {
    const { buttonText, buttonEnabled } = this.buttonConfig();

    return (
      <div>
        <button
          className={`ui primary button ${buttonEnabled}`}
          type="button"
          onClick={() => { this.onButtonClick(buttonText); }}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  country: state.country,
  connection: state.connection,
});

export default connect(mapStateToProps, { connectVpn, disconnectVpn })(ControlButton);
