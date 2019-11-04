import { TOGGLE_COMMS, SELECT_COMM_TYPE } from "./actionTypes";

export const toggleComms = (isVisible) => {
  return ({ type: TOGGLE_COMMS, payload: { isVisible } })
};

export const selectCommType = (selectedType) => {
  return ({type: SELECT_COMM_TYPE, payload: {selectedType } })
}
