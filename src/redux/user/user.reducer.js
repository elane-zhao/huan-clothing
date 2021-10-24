import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
};

// for the default param, null is also a valid value, only undefined will fall back to the default param
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
