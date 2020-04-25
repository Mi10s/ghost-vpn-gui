/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { connect } from 'react-redux';

class Status extends React.Component {
  render() {
    const { status } = this.props.connection;

    if (!status) {
      return <div>Waiting for status</div>;
    }

    return (
      <div>
        Status:
        {status}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ connection: state.connection });

export default connect(mapStateToProps)(Status);
