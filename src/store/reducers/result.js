import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility.js';

const initialState = {
    
    results: []
};


const deleteResult = (state, action ) => {
    const updatedArray = state.results.filter(result => result.id !== action.id);
    return updateObject (state,{results: updatedArray});
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        
     

                case actionTypes.STORE_RESULT:
                    //change data
                    return updateObject (state, {results: state.results.concat({ id: new Date(), value: action.result * 2})})
                    
                    case actionTypes.DELETE_RESULT:
                        //const id = 2;
                        //const newArray = [...state.results];

                        //newArray.splice(id,1)

                      return deleteResult(state, action);
                       
                 default: return state;
            }
};



export default reducer;