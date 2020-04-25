import { VPN_CONNECTED, VPN_DISCONNECTED, VPN_UNKNOWN } from '../actions/types';

const INITIAL_STATE = {
  status: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case VPN_CONNECTED:
      return { ...state, ...{ status: 'Connected' } };
    case VPN_DISCONNECTED:
      return { ...state, ...{ status: 'Disconnected' } };
    case VPN_UNKNOWN:
      return { ...state, ...{ status: 'Uknown state' } };
    default:
      return state;
  }
};
