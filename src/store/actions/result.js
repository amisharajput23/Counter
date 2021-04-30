import * as actionTypes from './actionTypes'

export const saveResult = (res) => {
   // const updatedResult = res * 2;
   // now with this been done we will return updatedAResult 
   // in result
    return{
        type: actionTypes.STORE_RESULT,
        result: res
    };
}

export const storeResult = (res) => {
    return function (dispatch, getState) {
        setTimeout ( () => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(res));
        }, 2000);
    }
    
};

export const deleteResult = (id) => {
    return{
        type: actionTypes.DELETE_RESULT,
        result: id
    };
};

