import sudo from 'sudo-js';
import {
  VPN_CONNECTED,
  VPN_DISCONNECTED,
  VPN_UNKNOWN,
  COUNTRY_SELECTED,
} from './types';

sudo.setPassword(process.env.USER_PASSWD);

export const connectVpn = (code) => (dispatch) => {
  const command = ['cyberghostvpn', '--traffic', '--country-code', code, '--connect'];

  sudo.exec(command, (err, pid, result) => {
    if (err) {
      dispatch({ type: VPN_UNKNOWN });
    }

    console.log(result);

    dispatch({ type: VPN_CONNECTED });
  });
};

export const disconnectVpn = () => (dispatch) => {
  const command = ['cyberghostvpn', '--stop'];

  sudo.exec(command, (err, pid, result) => {
    if (err) {
      dispatch({ type: VPN_UNKNOWN });
    }

    console.log(result);

    dispatch({ type: VPN_DISCONNECTED });
  });
};

export const selectCountry = (code) => ({
  type: COUNTRY_SELECTED,
  payload: {
    code,
  },
});
