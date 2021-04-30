import * as actionTypes from './actionTypes';


export const increment = () => {
    return{
        type: actionTypes.INCREMENT
    };
};


export const decrement = () => {
    return{
        type:actionTypes.DECREMENT
    };
};


export const add = (value) => {
    return{
        type:actionTypes.ADD,
        val: value
    };
};


export const subtract = (value) => {
    return{
        type: actionTypes.SUBTRACT,
        val: value
        //we have passed the arg as value as in counter.js we have passed
        //a value defined in the args
    };
};