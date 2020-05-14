import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateTournament, updateTournaments } from './redux/actions/actions'

const EditTournament = props => {
  const {isCreate} = props;

  const { tournament, tournaments } = useSelector(state => ({
    tournament: state.pickleball.tournament,
    tournaments: state.pickleball.tournaments,
    test: state,
  }));
  
  
  useEffect(()=>{
    // TODO: if NOT isCreate, then make a call to update the single redux 'tournament'
    // value with its firebase value based on which one is active on mount
  }, [])

  const dispatch = useDispatch()

  return (
    <div>
      <input placeholder="title" onChange={(e)=>{
        dispatch(updateTournament({title: e.target.value}))
      }}/>
      <input placeholder="date" onChange={(e)=>{
        console.log(tournament);
        dispatch(updateTournament({date: e.target.value}))
      }}/>
      <button onClick={()=>{
        if(isCreate){
          // update redux by appending the new tourney with array spread 
          dispatch(updateTournaments([...tournaments, ...[tournament]] ))
          //TODO: call firebase too 
        } else{
          const newTournaments = tournaments.map((t)=>{
            // if the redux val tourney ID is the same as the one we are editing
            if(t.id === tournament.id) return tournament; // RETURN THE REDUX SINGLE VALUE 
            else return t; // otherwise, business as usual
          })
          // FINALLY, now that we have our updated array, dispatch to redux and update firebase 
          dispatch(updateTournaments(newTournaments))
          //TODO: call firebase too :D 
        }
      }}>UPDATE</button>
    </div>
  );
}

export default EditTournament
