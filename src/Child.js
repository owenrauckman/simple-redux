import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleComms, selectCommType } from './redux/actions/actions'

const Child = props => {

  const { isVisible, selectedType } = useSelector(state => ({
    isVisible: state.comms.isVisible,
    selectedType: state.comms.selectedType,
  }));

  const dispatch = useDispatch()

  return (
    <div>
        <span style={{color: isVisible ? 'green' : 'red'}}>
          Are comms visible?
        </span>
        <button onClick={ () => dispatch(toggleComms(!isVisible)) }>
          toggleVisible
        </button>

        <h1>Select a commType ({selectedType})</h1>
        <ul>
          {['video', 'audio', 'paper'].map((type) =>
          <li
            onClick={ ()=> dispatch(selectCommType(type)) } key={type}
            style={{color: type === selectedType ? 'blue' : 'black'}}
          >{type}</li>
          )}
        </ul>
    </div>
  );
}

export default Child
