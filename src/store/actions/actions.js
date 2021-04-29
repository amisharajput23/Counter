export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

//creating action creators: is a fn which returns or creates a action

 export const increment = () => {
    return{
        type: INCREMENT
    };
};


export const decrement = () => {
    return{
        type: DECREMENT
    };
};


export const add = (value) => {
    return{
        type: ADD,
        val: value
    };
};


export const subtract = (value) => {
    return{
        type: SUBTRACT,
        val: value
        //we have passed the arg as value as in counter.js we have passed
        //a value defined in the args
    };
};
export const saveResult = (res) => {
    return{
        type: STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    return function (dispatch){
        setTimeout ( () => {
            dispatch(saveResult(res));
        }, 2000);
    }
    
};

export const deleteResult = (id) => {
    return{
        type: DELETE_RESULT,
        result: id
    };
};

