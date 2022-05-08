
import * as api from '../api/index.js';
import {FETCH_ALL_EVENTS, FETCH_ALL_COMMITTE,CREATE, UPDATE,DELETE,LIKE} from '../constants/actionTypes'

export const getEvents=()=> async(dispatch)=>{
    try{
        const {data} = await api.fetchData('http://127.0.0.1:8080/events/all');
       console.log('data1', data)
        dispatch({type:FETCH_ALL_EVENTS, payload:data});
    }catch(error){
        console.log(error)
    }
}
export const getCommittes=()=> async(dispatch)=>{
    try{
        const {data} = await api.fetchData('http://127.0.0.1:8080/committe/all');
       console.log('data11', data)
        dispatch({type:FETCH_ALL_COMMITTE, payload:data});
    }catch(error){
        console.log(error)
    }
}