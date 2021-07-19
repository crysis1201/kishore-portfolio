import actionTypes from './menu.types';

const INITIAL_STATE = {
  menuOpen: true
};

const menuReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_MENU_OPEN:
      return {
        ...state,
        menuOpen: !state.menuOpen
      }
    default:
      return state;
  }
};

export default menuReducer;