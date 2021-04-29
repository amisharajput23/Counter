import * as actionTypes from '../actions/actions';


const initialState = {
    
    results: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        
     

                case actionTypes.STORE_RESULT:
                    return{
                       ...state,
                       //to update an array immutably using concat
                       results: state.results.concat({ id: new Date(), value: action.result}) //returns a new array + the arg added to concat; retruns new array with all the properties of old and new state 
                       //we could have used push() but this manipulates the original value
                       //
                    }
                    case actionTypes.DELETE_RESULT:
                        //const id = 2;
                        //const newArray = [...state.results];

                        //newArray.splice(id,1)
                        const updatedArray = state.results.filter(result => result.id !== action.id);
                       return{
                           ...state,
                           results: updatedArray
                       } 

                 default: return state;
            }
};



export default reducer;