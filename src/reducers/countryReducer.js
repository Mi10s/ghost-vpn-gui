import { COUNTRY_SELECTED, COUNTRY_LIST } from '../actions/types';

const INITIAL_STATE = {
  code: null,
  countryList: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COUNTRY_SELECTED:
      return { ...state, code: action.payload };
    case COUNTRY_LIST:
      return { ...state, countryList: action.payload };
    default:
      return state;
  }
};
