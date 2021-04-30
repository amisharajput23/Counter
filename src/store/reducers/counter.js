import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0,
    
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        
        case actionTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1});
            //const newState =Object.assign({}, state);//this will clone the old object in an immutable way giving us new js obj having all the properties of old obj but is technically a diff obj
            //newState.counter = state.counter + 1;
            //return newState;//another way of adding new property
         
    case actionTypes.DECREMENT:
        return updateObject(state, {counter: state.counter - 1});
        //return {
          //  ...state, //distributing all properties and value from the old state to the new formed state and 
            //adding new property defined below in counter only not in result[]
            //counter: state.counter - 1
        //}
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.val});
            
            case actionTypes.SUBTRACT:
                return updateObject(state, {counter: state.counter - action.val});
                

                
                 default: return state;
            }
};



export default reducer;