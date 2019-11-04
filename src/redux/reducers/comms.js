import { TOGGLE_COMMS, SELECT_COMM_TYPE } from "../actions/actionTypes";
import {initialCommState } from '../constants/initialCommState';

const comms = (state = initialCommState, action) => {
  switch (action.type) {
    case TOGGLE_COMMS: {
      return { ...state, isVisible: action.payload.isVisible }
    }
    case SELECT_COMM_TYPE: {
      return { ...state, selectedType: action.payload.selectedType }
    }
    default: {
      return state;
    }
  }
};

export default comms;
