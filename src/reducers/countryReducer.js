import { COUNTRY_SELECTED } from '../actions/types';

export default (state = { code: null }, action) => {
  switch (action.type) {
    case COUNTRY_SELECTED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
